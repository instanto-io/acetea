# AceTea

AceTea is a TeaVM port of [Dave Hovemeyer's AceGWT](https://github.com/daveho/AceGWT), with the original `edu.ycp.cs.dh.acegwt.client.ace` package and Java-facing editor API. Based on upstream commit `b0796a534c05af17a345b9ff48fa2772844547c0`; original sources and their checksums are retained in `upstream/`.

The JSNI implementation has been replaced with TeaVM JSO bridges and Java callbacks. The embedded editor is upgraded from Ace 1.3.3 to **Ace 1.45.2**. This is an independent port, not an upstream AceGWT release.

The project name is **AceTea**. The compatibility artifact remains
`io.instanto:acegwt-compat:0.1.0-SNAPSHOT`, and the upstream Java package names
remain unchanged to ease migration.

## Modules

- `acetea-webjar`: pinned Ace 1.45.2 JavaScript, modes, themes, extensions, workers and license under `META-INF/resources/webjars/ace/1.45.2/`.
- `acegwt-compat`: Java widget, selection/range APIs, annotations, markers, commands and custom completion callbacks; bundled Ace modes, themes, extensions and workers.
- `acegwt-demo`: Java-authored showcase with Java/JSON/SQL documents, themes, selection, read-only mode, diagnostics, custom completion, save commands, and destroy/recreate controls.

## Showcase

[Open the AceTea showcase](https://instanto-io.github.io/acetea/). It demonstrates
Java/JSON/SQL editing, custom Java completion, annotations and markers, commands,
selection, themes, read-only mode, and editor recreation. Save stores a snapshot
in memory for this session. The diagnostic button displays an example warning.

The `main` workflow builds the WebJar and Java library, runs Chromium/WebKit
contracts, then deploys the static showcase to GitHub Pages.

## Build and run

Requires JDK 21, Maven, and the Instanto TeaVM parent/compat artifacts available in your Maven repository. This uses the same patched TeaVM toolchain as the sibling ports.

```sh
mvn verify
python3 -m http.server 8792 --directory acegwt-demo/target/site
```

Open http://localhost:8792. `verify` runs the showcase in Chromium and WebKit with Playwright; install their browser binaries first if needed. `mvn package -DskipTests` builds without browser verification.

The tests check Java API contracts, editing, annotations and markers, custom completion, selection, read-only state, and repeated native-editor destruction/recreation without duplicate change callbacks.
They also exercise WebJar loading under a nested URL, deduplicated scripts and a
missing-resource failure message. Desktop and mobile screenshots are written to `acegwt-demo/target/`.

## Using the widget

The compatibility artifact brings `io.instanto:acetea-webjar:0.1.0-SNAPSHOT`
as a transitive Maven dependency. It contains the pinned Ace distribution, so no
CDN or separate npm download is needed. Servers that expose JAR static resources
can serve it at `webjars/ace/1.45.2/`. For static hosting, copy/unpack the contents
of `META-INF/resources/` into your site; the demo POM demonstrates this.

Use `AceResources.whenReady(...)` to load Ace and your chosen modules before
creating editors. It deduplicates concurrent loads and configures Ace's mode,
theme and worker paths. The default URL is relative to the page, so it works
under a GitHub Pages project path too. For another mount point, call
`AceResources.setBasePath("/assets/ace/1.45.2/")` before loading.

```java
AceResources.whenReady(
    new String[]{"mode-java", "theme-tomorrow_night", "ext-language_tools"},
    () -> createEditor(),
    failure -> showLoadError(failure.getMessage()));
```

Inside the ready callback:

```java
AceEditor editor = new AceEditor();
editor.setSize("100%", "480px");
RootPanel.get("editor-host").add(editor);
editor.startEditor();
editor.setModeByName("java");
editor.setThemeByName("tomorrow_night");
editor.setText("public class Main {}\n");
editor.addOnChangeHandler(event -> saveDraft(editor.getText()));
```

Call `startEditor()` after attachment. Removing the widget destroys its native editor; attach and call `startEditor()` to initialize it again. Save and restore application text when recreating the widget, as shown in the demo. `startEditor()` and `destroy()` are idempotent. Explicit `AceRange` and annotation wrappers replace GWT overlay casts.

## Scope and compatibility

This preserves the upstream Java package and most public method shapes, but is not a binary-compatible GWT artifact. Code relying on arbitrary GWT JavaScriptObject overlay casts should use the provided wrappers. Modes/themes must be loaded before selecting them by name. Browser verification covers the showcased paths, not every Ace option, mode or extension. Remote completion services and persistent storage are application responsibilities.

## Credits and licenses

- **AceGWT** by Dave Hovemeyer and contributors: MIT, original [LICENSE](LICENSE) retained.
- **Ace** by Ajax.org B.V. and contributors: BSD-3-Clause, bundled license at `acetea-webjar/src/main/resources/META-INF/resources/webjars/ace/1.45.2/LICENSE`.
- Ace assets are pinned to npm `ace-builds@1.45.2`, sourced from `src-min-noconflict`. `upstream/ace-assets.json` records SHA-256 checksums.

TeaVM adaptation and showcase work are maintained separately from the credited upstream projects.
