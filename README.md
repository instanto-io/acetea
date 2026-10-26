# AceTea — alpha TeaVM port

> **Alpha / experimental — `0.1.0-SNAPSHOT`.** AceTea is an early TeaVM port for
> evaluation and integration testing. Its Java bindings, packaging and build setup
> may change before a stable release. The showcase and passing browser tests cover
> the demonstrated features; they do not establish production readiness or full
> AceGWT/Ace compatibility. This status applies to the port, separately from the
> bundled Ace editor.

AceTea is a TeaVM port of [Dave Hovemeyer's AceGWT](https://github.com/daveho/AceGWT), with the original `edu.ycp.cs.dh.acegwt.client.ace` package and Java-facing editor API. Based on upstream commit `b0796a534c05af17a345b9ff48fa2772844547c0`; original sources and their checksums are retained in `upstream/`.

The JSNI implementation has been replaced with TeaVM JSO bridges and Java callbacks. The embedded editor is upgraded from Ace 1.3.3 to **Ace 1.45.2**. This is an independent port, not an upstream AceGWT release.

The project name is **AceTea**. The compatibility artifact remains
`io.instanto:acegwt-compat:0.1.0-SNAPSHOT`, and the upstream Java package names
remain unchanged to ease migration.

## Modules

- `acetea-webjar`: pinned Ace 1.45.2 JavaScript, modes, themes, snippets, extensions, workers and license under `META-INF/resources/webjars/ace/1.45.2/`.
- `acegwt-compat`: Java widget, selection/range APIs, annotations, markers, commands, search/replacement, undo/redo, snippets, accessibility options and custom completion callbacks; bundled Ace modes, themes, extensions and workers.
- `acegwt-demo`: Java-authored showcase with Java/JSON/SQL documents, themes, selection, read-only mode, diagnostics, custom completion, live completion, snippets, search/replace, undo/redo, whitespace and relative line numbers, save commands, and destroy/recreate controls.

## Showcase

[Open the AceTea showcase](https://instanto-io.github.io/acetea/). It demonstrates
Java/JSON/SQL editing, custom Java completion, annotations and markers, commands,
selection, themes, read-only mode, live completion, snippet tab stops, search/replace,
undo/redo, whitespace, relative line numbers and editor recreation. Save stores a snapshot
in memory for this session. The diagnostic button displays an example warning.
The hosted showcase is the easiest way to evaluate the alpha without setting up
the build environment.

## Build and run the alpha

The repository currently depends on the **Instanto snapshot toolchain**. A fresh
checkout is not a self-contained build using only Maven Central. Access to the
Instanto package registry, or a local Maven repository containing the required
parent, compatibility and toolchain artifacts, is needed before Maven can build it.

### Prerequisites

- **JDK 21** to run Maven and the build plugins. Check `mvn --version` reports the
  intended Java installation; set `JAVA_HOME` if needed. The module POMs target
  Java 17 bytecode, which is separate from the JDK used to run the build.
- **Maven**, installed locally; this repository does not include a Maven wrapper.
- The `io.instanto:instanto-teavm-pom:0.1.0-SNAPSHOT` parent,
  `io.instanto:gwt-user-compat:0.1.0-SNAPSHOT` and their transitive toolchain
  dependencies. The inherited build currently uses patched **TeaVM 0.16.0**.
  Use the matching Instanto parent/toolchain rather than substituting an arbitrary
  stock TeaVM version.
- **Chromium and WebKit binaries for the project's Playwright version** to run
  browser verification. The installation command below uses the Java test
  dependency declared in the demo POM (currently Playwright 1.56.0).
- **Python 3** only if using the example local HTTP server below.

The Ace 1.45.2 assets are already committed in `acetea-webjar`; building the port
requires no npm installation or runtime CDN download. Maven dependencies and
Playwright browser binaries still need to be downloaded unless already cached.

### Configure dependency access

[`.github/maven-settings.xml`](.github/maven-settings.xml) provides the snapshot
repository and plugin repository configuration, including the repository needed
to resolve the parent POM. It reads credentials from `FORGEJO_PACKAGE_USER` and
`FORGEJO_PACKAGE_TOKEN`. Set those environment variables using credentials with
package read access before running the commands below. Network access to
`packages.instanto.io` is also required; credentials alone do not provide it.
Do not commit credentials to this repository.

The examples explicitly select that settings file. If your existing Maven settings
already provide equivalent access, omit `--settings .github/maven-settings.xml`.
If you cannot access the registry, the alternatives are the hosted showcase or
building/installing the matching Instanto dependency projects locally according
to their own instructions. This repository does not bootstrap those projects.

### Build, install browsers, then verify

Run these commands from the repository root. The first step installs all reactor
artifacts locally so the separate browser installer can resolve the demo's
`acegwt-compat` and WebJar dependencies. **It skips tests and is not verification.**

```sh
mvn --settings .github/maven-settings.xml --batch-mode --no-transfer-progress \
    clean install -DskipTests

mvn --settings .github/maven-settings.xml --batch-mode --no-transfer-progress \
    -f acegwt-demo/pom.xml \
    org.codehaus.mojo:exec-maven-plugin:3.5.0:java \
    -Dexec.classpathScope=test \
    -Dexec.mainClass=com.microsoft.playwright.CLI \
    -Dexec.args="install chromium webkit"

mvn --settings .github/maven-settings.xml --batch-mode --no-transfer-progress verify
```

On supported Linux hosts that also need browser system libraries, use
`-Dexec.args="install --with-deps chromium webkit"` for the installer step; this
may require permission to install OS packages. If you set `PLAYWRIGHT_BROWSERS_PATH`,
use the same value for installation and verification. Reinstall the matching
binaries when changing the Playwright dependency version.

Once dependencies and browser binaries are available, subsequent full checks can
use `mvn --settings .github/maven-settings.xml clean verify`. Use `-U` when you
intentionally need to refresh changing snapshot dependencies. Snapshot versions
are mutable, so this alpha does not yet promise reproducible dependency versions
across build dates.

### Run the showcase locally

After a successful build:

```sh
python3 -m http.server 8792 --bind 127.0.0.1 --directory acegwt-demo/target/site
```

Open [http://localhost:8792](http://localhost:8792). Serve the generated site over
HTTP; opening `index.html` directly as a local file is not the supported setup.
Keep the entire `target/site` directory, including `webjars/` and `legal/`.

For a build without browser tests, use
`mvn --settings .github/maven-settings.xml package -DskipTests`. This produces
artifacts and the site, but does **not** verify browser behavior. Maven `test`
alone also does not run the Failsafe browser integration tests; use `verify`.

### Verification and troubleshooting

The tests check Java API contracts, editing, annotations and markers, custom completion, selection, read-only state, and repeated native-editor destruction/recreation without duplicate change callbacks.
Java contracts also cover search flags and range positions, replacement counts, regex searches,
snippet placeholder replacement, undo grouping and reset, and invalid/lifecycle inputs.
Browser interactions check search UI, live completion, accessible input labels, snippet
tab stops, history and display options, including restored configuration after recreation.
They also exercise WebJar loading under a nested URL, deduplicated scripts and a
missing-resource failure message. Desktop and mobile screenshots are written to `acegwt-demo/target/`.

Common setup failures:

| Symptom | Check |
| --- | --- |
| Non-resolvable parent or missing Instanto snapshot artifact | Repository settings, registry connectivity and read credentials; Maven must resolve the parent before reading its inherited configuration. |
| Browser executable missing | Run the Playwright installer above using the same browser cache path as the tests. |
| Browser fails to launch on Linux due to missing libraries | Install the browser's OS dependencies using the supported `--with-deps` setup. |
| Showcase reports missing Ace resources | Serve the complete generated site and check its `webjars/ace/1.45.2/` URL; loading the Java library alone does not serve static resources. |
| Browser contract fails | Inspect `acegwt-demo/target/failsafe-reports/`; desktop/mobile screenshots are produced when the test reaches those steps. |

## Publishing the showcase (maintainers)

Publishing is separate from building locally. `scripts/publish-showcase.sh`
requires a clean, committed checkout, JDK 21, Maven, installed browser binaries,
registry access and an authenticated GitHub CLI (`gh`) with permission to push
and dispatch workflows. **The script uses Maven's default settings**, so configure
equivalent registry access in your normal Maven settings before invoking it; it
does not automatically select `.github/maven-settings.xml`.

The script runs `mvn clean verify`, pushes the generated static site to the
`showcase` branch, and dispatches the GitHub Pages workflow. Its `build-info.json`
records the source commit. This publishes a showcase, not a stable library release
or Maven artifacts.

The full-build workflow is manually dispatched and requires a self-hosted
`instanto-container` runner with registry access. It installs the matching browser
binaries, verifies the build and deploys Pages from `main`. The separate static-site
workflow publishes the already-built `showcase` branch on a GitHub-hosted runner.
A successful static-site deployment alone is not a fresh Java build or test run.

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
    new String[]{"mode-java", "theme-tomorrow_night", "ext-language_tools",
                 "ext-searchbox", "snippets/java"},
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

## Modern Java API

The original AceGWT methods remain available. These additive bindings expose capabilities
in the pinned modern Ace runtime, including features the original wrapper did not expose.
Some features (such as history and search) existed in older Ace itself; they are new Java
bindings here, not a claim that all were introduced after Ace 1.3.3.

| Capability | Java API | Assets to load |
| --- | --- | --- |
| Literal/regex search, case and word matching, direction and wrap | `find`, `replaceAll`, `AceSearchOptions`; `AceRange.getStart/getEnd` | Core |
| Search and replace panel | `showSearch(true)` | `ext-searchbox` |
| Undo/redo and programmatic edit grouping | `undo`, `redo`, `canUndo`, `canRedo`, `startUndoGroup`, `resetUndoHistory` | Core |
| Live completion with timing and prefix controls | `setLiveAutocompletionEnabled`, `setLiveAutocompletionDelay`, `setLiveAutocompletionThreshold` | `ext-language_tools` |
| Snippet expansion and numbered placeholders | `setSnippetsEnabled`, `insertSnippet` | `ext-language_tools`; optionally `snippets/java` etc. for predefined language snippets |
| Accessible input label and keyboard navigation | `setTextInputAriaLabel`, `setKeyboardAccessibilityEnabled` | Core |
| Placeholder, whitespace, indentation guides and relative line numbers | `setPlaceholder`, `setShowInvisibles`, `setDisplayIndentGuides`, `setHighlightIndentGuides`, `setRelativeLineNumbers` | Core |

```java
editor.setTextInputAriaLabel("Source editor");
editor.setKeyboardAccessibilityEnabled(true);
editor.setPlaceholder("Start typing…");
editor.setLiveAutocompletionEnabled(true);
editor.setLiveAutocompletionDelay(150); // milliseconds
editor.setLiveAutocompletionThreshold(2);
editor.setSnippetsEnabled(true);
editor.insertSnippet("System.out.println(${1:value});$0");

AceSearchOptions options = new AceSearchOptions()
    .withCaseSensitive(true).withWholeWord(true);
AceRange match = editor.find("value", options); // null when not found
int replacements = editor.replaceAll("value", "message", options);
editor.showSearch(true);
editor.undo();
```

Search defaults are literal, case-insensitive, forward and wrapping, skipping the
current match. Positions are zero-based and range ends are exclusive. Use
`withSkipCurrent(false)` to include the current position. Replacement covers the
whole document. Regular expressions and replacement groups use JavaScript syntax.
Loading a new document can be followed by `resetUndoHistory()`; use `startUndoGroup()`
to separate successive programmatic edits. These methods require a started editor.

`AceResources.whenReady(ready, failed)` loads core plus the completion/snippet and
search UI extensions. The overload taking module names lets you choose exactly
what to load, including `snippets/java`. All assets come from the WebJar. The new
extension-dependent methods report a clear error if their extension was not loaded.
See the [Ace editor options](https://ace.c9.io/api/interfaces/ace.Ace.EditorOptions.html)
and [editor API](https://ace.c9.io/api/classes/ace.Editor.html) for underlying behavior.

## Scope and compatibility

**Alpha compatibility target:** retain the AceGWT Java API where practical while
adding access to modern Ace features. API stability and complete behavioral parity
are not yet guaranteed. Evaluate the specific methods, modes and extensions your
application needs against the pinned runtime before adopting the port.

This preserves the upstream Java package and most public method shapes, but is not a binary-compatible GWT artifact. Code relying on arbitrary GWT JavaScriptObject overlay casts should use the provided wrappers. Modes/themes must be loaded before selecting them by name. Browser verification covers the showcased paths, not every Ace option, mode or extension. Remote completion services and persistent storage are application responsibilities.
This is a curated API, not complete coverage of Ace: independent session management,
code lenses, inline ghost text, diff views and arbitrary extension APIs do not yet
have dedicated Java wrappers. `unwrapEditor()` remains available for custom TeaVM integrations.

## Credits and licenses

- **AceGWT** by Dave Hovemeyer and contributors: MIT, original [LICENSE](LICENSE) retained.
- **Ace** by Ajax.org B.V. and contributors: BSD-3-Clause, bundled license at `acetea-webjar/src/main/resources/META-INF/resources/webjars/ace/1.45.2/LICENSE`.
- Ace assets are pinned to npm `ace-builds@1.45.2`, sourced from `src-min-noconflict`. `upstream/ace-assets.json` records SHA-256 checksums.

TeaVM adaptation and showcase work are maintained separately from the credited upstream projects.

The built showcase includes a visible **Licenses and notices** link and ships the full upstream license texts alongside its JavaScript. `legal/runtime/provenance.json` records the sources and checksums of runtime notices; refresh these copies when upgrading dependencies. Keep the complete `target/site` directory when publishing or redistributing the showcase.
