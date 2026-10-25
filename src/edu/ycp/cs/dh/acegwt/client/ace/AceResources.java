package edu.ycp.cs.dh.acegwt.client.ace;

import io.instanto.teavm.module.ScriptModule;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import org.teavm.jso.JSBody;

/** Loads the pinned AceTea WebJar, sharing requests across editor instances. */
public final class AceResources {
  public static final String VERSION = "1.45.2";
  private static String basePath = "webjars/ace/" + VERSION + "/";
  private static ScriptModule core;
  private static final Map<String, ScriptModule> modules = new HashMap<>();

  private AceResources() {}

  /** Set the served distribution URL before the first load. */
  public static void setBasePath(String path) {
    if (core != null) throw new IllegalStateException("Ace loading has already started");
    if (path == null || path.isEmpty()) throw new IllegalArgumentException("Empty Ace asset path");
    basePath = path.endsWith("/") ? path : path + "/";
  }

  /** Load core and optional modules (for example mode-java or ext-language_tools). */
  public static void whenReady(String[] requested, Runnable ready, Consumer<Throwable> failed) {
    String[] names = requested.clone();
    for (String name : names) {
      if (!name.matches("(mode|theme|ext)-[A-Za-z0-9_]+"))
        throw new IllegalArgumentException("Invalid Ace module: " + name);
    }
    if (core == null)
      core = ScriptModule.named("AceTea").script(basePath + "ace.js", AceResources::isLoaded);
    core.onFailure(failed)
        .whenReady(
            () -> {
              configure(basePath);
              loadModules(names, 0, ready, failed);
            });
  }

  private static void loadModules(
      String[] names, int i, Runnable ready, Consumer<Throwable> failed) {
    if (i == names.length) {
      ready.run();
      return;
    }
    ScriptModule module =
        modules.computeIfAbsent(
            names[i], name -> ScriptModule.named("AceTea " + name).script(basePath + name + ".js"));
    module.onFailure(failed).whenReady(() -> loadModules(names, i + 1, ready, failed));
  }

  @JSBody(script = "return !!(window.ace && window.ace.edit);")
  private static native boolean isLoaded();

  @JSBody(
      params = "path",
      script =
          "ace.config.set('basePath',path);ace.config.set('modePath',path);ace.config.set('themePath',path);ace.config.set('workerPath',path);")
  private static native void configure(String path);
}
