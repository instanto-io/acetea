package io.instanto.acegwt.demo;

import static org.junit.Assert.*;

import com.microsoft.playwright.*;
import com.sun.net.httpserver.HttpServer;
import java.net.InetSocketAddress;
import java.nio.file.*;
import java.util.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

@RunWith(Parameterized.class)
public class EditorDemoIT {
  @Parameterized.Parameters(name = "{0}")
  public static Object[] engines() {
    return new Object[] {"chromium", "webkit"};
  }

  private final String engine;

  public EditorDemoIT(String engine) {
    this.engine = engine;
  }

  @Test
  public void editsAndReleasesNativeEditors() throws Exception {
    Path site = Path.of("target/site").toAbsolutePath().normalize();
    var server = HttpServer.create(new InetSocketAddress("127.0.0.1", 0), 0);
    server.createContext(
        "/",
        e -> {
          String requestPath = e.getRequestURI().getPath().replaceFirst("^/project/", "/");
          Path f =
              site.resolve(requestPath.equals("/") ? "index.html" : requestPath.substring(1))
                  .normalize();
          if (!f.startsWith(site) || !Files.isRegularFile(f)) {
            e.sendResponseHeaders(404, -1);
            e.close();
            return;
          }
          byte[] b = Files.readAllBytes(f);
          e.getResponseHeaders()
              .set(
                  "Content-Type",
                  f.toString().endsWith(".js")
                      ? "text/javascript"
                      : f.toString().endsWith(".css") ? "text/css" : "text/html");
          e.sendResponseHeaders(200, b.length);
          try (var o = e.getResponseBody()) {
            o.write(b);
          }
        });
    server.start();
    try (var pw = Playwright.create();
        var browser = (engine.equals("webkit") ? pw.webkit() : pw.chromium()).launch()) {
      var page = browser.newPage(new Browser.NewPageOptions().setViewportSize(1280, 920));
      List<String> errors = new ArrayList<>();
      page.onPageError(
          x -> {
            errors.add(x);
            System.out.println(x);
          });
      page.navigate("http://127.0.0.1:" + server.getAddress().getPort() + "/project/");
      page.waitForFunction("document.body.dataset.ready === 'true'");
      assertEquals("passed", page.locator("body").getAttribute("data-contracts"));
      page.locator("#json").click();
      assertEquals("project.json", page.locator("#filename").textContent());
      page.locator(".ace_text-input").press("ControlOrMeta+A");
      page.keyboard().insertText("{\"edited\":true}");
      page.locator("#save").click();
      assertTrue(page.locator("#output").textContent().contains("15 characters"));
      page.locator("#java").click();
      page.locator("#diagnostics").click();
      assertEquals(
          1, ((Number) page.evaluate("showcaseEditor.session.getAnnotations().length")).intValue());
      page.waitForSelector(".diagnostic-range");
      assertEquals(1, page.locator(".diagnostic-range").count());
      page.locator("#clear").click();
      assertEquals(
          0, ((Number) page.evaluate("showcaseEditor.session.getAnnotations().length")).intValue());
      page.evaluate("showcaseEditor.setValue('pri',1)");
      page.locator("#complete").click();
      page.waitForSelector(".ace_autocomplete");
      page.waitForFunction(
          "document.querySelector('.ace_autocomplete').textContent.includes('println')");
      page.keyboard().press("Enter");
      assertTrue(
          page.evaluate("showcaseEditor.getValue()").toString().contains("System.out.println"));
      page.locator("#java").click();
      page.locator("#select").click();
      assertEquals("public class", page.evaluate("showcaseEditor.getSelectedText()"));
      page.locator("#readonly").click();
      assertEquals(true, page.evaluate("showcaseEditor.getReadOnly()"));
      page.locator("#readonly").click();
      for (int i = 0; i < 3; i++) {
        page.evaluate("() => { window.previousEditor=showcaseEditor; }");
        page.locator("#recreate").click();
        assertEquals(true, page.evaluate("previousEditor !== showcaseEditor"));
        assertEquals(1, page.locator(".ace_editor").count());
      }
      assertEquals(1, page.locator("script[src$='/ace.js']").count());
      assertEquals(1, page.locator("script[src$='/mode-java.js']").count());
      assertTrue(
          page.evaluate("ace.config.get('workerPath')").toString().endsWith("webjars/ace/1.45.2/"));
      int before = Integer.parseInt(page.locator("#changes").textContent());
      page.evaluate("showcaseEditor.insert('x')");
      assertEquals(before + 1, Integer.parseInt(page.locator("#changes").textContent()));
      page.locator("#java").click();
      page.screenshot(
          new Page.ScreenshotOptions()
              .setPath(Path.of("target/ace-desktop-" + engine + ".png"))
              .setFullPage(true));
      page.locator("#theme").click();
      assertEquals("light", page.locator("body").getAttribute("data-theme"));
      page.setViewportSize(390, 844);
      page.screenshot(
          new Page.ScreenshotOptions()
              .setPath(Path.of("target/ace-mobile-" + engine + ".png"))
              .setFullPage(true));
      assertEquals(true, page.evaluate("document.documentElement.scrollWidth <= innerWidth"));
      assertTrue(errors.toString(), errors.isEmpty());
      Page missing = browser.newPage();
      missing.route(
          "**/webjars/ace/1.45.2/ace.js",
          r -> r.fulfill(new Route.FulfillOptions().setStatus(404).setBody("missing")));
      missing.navigate("http://127.0.0.1:" + server.getAddress().getPort() + "/project/");
      missing.waitForFunction(
          "document.querySelector('#output').textContent.includes('Unable to load editor resources')");
      assertEquals(0, missing.locator(".ace_editor").count());
      missing.close();
    } finally {
      server.stop(0);
    }
  }

  @org.junit.Test
  public void showcaseShipsCompleteLicenseLinks() throws Exception {
    java.nio.file.Path site = java.nio.file.Path.of("target/site");
    org.junit.Assert.assertTrue(
        java.nio.file.Files.readString(site.resolve("index.html"))
            .contains("href=\"legal/index.html\""));
    org.junit.Assert.assertEquals(
        java.nio.file.Files.readString(java.nio.file.Path.of("../LICENSE")),
        java.nio.file.Files.readString(site.resolve("legal/project/LICENSE")));
    org.junit.Assert.assertEquals(
        java.nio.file.Files.readString(java.nio.file.Path.of("../NOTICE")),
        java.nio.file.Files.readString(site.resolve("legal/project/NOTICE")));
    try (var pages = java.nio.file.Files.walk(site.resolve("legal"))) {
      for (var page : pages.filter(p -> p.toString().endsWith(".html")).toList()) {
        var links =
            java.util.regex.Pattern.compile("href=\"([^\"]+)\"")
                .matcher(java.nio.file.Files.readString(page));
        while (links.find()) {
          String href = links.group(1);
          if (!href.contains(":")) {
            org.junit.Assert.assertTrue(
                page + " has missing license link " + href,
                java.nio.file.Files.isRegularFile(page.getParent().resolve(href).normalize()));
          }
        }
      }
    }
  }
}
