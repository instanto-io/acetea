# AceTea

AceTea provides a Java API for the Ace code editor in GWT and TeaVM applications. It is
based on [Dave Hovemeyer's AceGWT](https://github.com/daveho/AceGWT), retaining the
`edu.ycp.cs.dh.acegwt.client.ace` package and maintaining shared GWT-compatible sources for both compilers.
It bundles **Ace 1.45.2**, updated from the original wrapper's Ace 1.3.3.

**Alpha — `0.1.0-SNAPSHOT`.** The port is available for evaluation. The API and
packaging may change, and compatibility with AceGWT is partial.

[Showcase](https://instanto-io.github.io/acetea/) · [Java API sources](acegwt-compat/src/main/java/edu/ycp/cs/dh/acegwt/client/ace)

## Add the library

```xml
<dependency>
  <groupId>io.instanto</groupId>
  <artifactId>acegwt-compat</artifactId>
  <version>0.1.0-SNAPSHOT</version>
</dependency>
```

Use `acegwt-compat` in a TeaVM application with the Instanto compatibility
toolchain. For GWT 2.13.1, use `acetea-gwt` instead and inherit
`edu.ycp.cs.dh.acegwt.AceGWT` in your GWT module. Choose the artifact for your
compiler; they provide the same packages and API.

The canonical sources use GWT widgets, DOM types, `ScriptInjector`, JSNI and
JsInterop callbacks. The TeaVM build generates native bindings through the shared
source adapter and uses the GWT compatibility layer. Native overlay adaptation
belongs to that shared layer, rather than a separate AceTea implementation.
The coordinates use the current alpha snapshot, which can be installed from
source. Maven Central publication is planned. The artifact keeps its AceGWT name
to ease migration.
Do not include both this library and the original AceGWT classes.

The dependency includes `acetea-webjar`, containing Ace's JavaScript, modes,
themes, snippets, extensions and workers. Serve its `META-INF/resources/`
contents from your application, or copy them into your static site as shown in
[the demo POM](acegwt-demo/pom.xml). The default asset directory is
`webjars/ace/1.45.2/`, relative to the page. Adding the Maven dependency does not
itself make those files available over HTTP.

## Create an editor

Provide a container in the page:

```html
<div id="editor-host"></div>
```

Load the required assets, attach the widget, then start it:

```java
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.RootPanel;
import edu.ycp.cs.dh.acegwt.client.ace.*;

AceResources.whenReady(
    new String[]{"mode-java", "theme-tomorrow_night"},
    () -> {
      AceEditor editor = new AceEditor();
      editor.setSize("100%", "400px");
      RootPanel.get("editor-host").add(editor);
      editor.startEditor();
      editor.setModeByName("java");
      editor.setThemeByName("tomorrow_night");
      editor.setText("public class Main {\n}\n");
    },
    error -> Window.alert("Could not load Ace: " + error.getMessage()));
```

Keep the editor reference in the component that owns it. The following examples
use that started editor. Modes and themes must be loaded before selecting them.
For another asset location, call `AceResources.setBasePath(...)` before the first
load. Repeated loader calls share script requests.

## Read and edit text

`getText()` reads the document and `setText(...)` replaces it. Use
`insertAtCursor(...)` to insert text at the current selection. Change callbacks
run for edits made by the user or through the API.

```java
editor.addOnChangeHandler(event -> {
  String text = editor.getText();
  // Update the application's document state.
});
editor.getSelection().select(0, 13, 0, 17);
editor.insertAtCursor("Example");
```

Selections and ranges use zero-based rows and columns, with an exclusive end.
`gotoLine(...)` uses one-based line numbers. Cursor callbacks, selection
listeners, line access and position/index conversion are also available.

`undo()` and `redo()` navigate the edit history; `canUndo()` and `canRedo()` report
whether an operation is available. Call `startUndoGroup()` before a separate
programmatic edit, or `resetUndoHistory()` after loading a different document.

## Search and replace

```java
AceSearchOptions options = new AceSearchOptions()
    .withCaseSensitive(true).withWholeWord(true);
AceRange match = editor.find("Example", options);
int replacements = editor.replaceAll("Example", "Main", options);
```

`find` selects a match and returns its range, or `null` when none is found.
`getStart()` and `getEnd()` expose the range positions. Search defaults to literal,
case-insensitive, forward matching with wrapping, skipping the current match.
Options also control direction, wrapping, regular expressions and whether to
include the current position. Regular expressions use JavaScript syntax.
`replaceAll` searches the whole document and returns the replacement count.

For Ace's search/replace panel, include `ext-searchbox` in the initial asset list,
then call `editor.showSearch(true)`.

## Completion and snippets

Include `ext-language_tools` in the initial asset list to use completion and
snippets. Enable explicit completion, completion while typing, or both:

```java
editor.setAutocompleteEnabled(true);
editor.setLiveAutocompletionEnabled(true);
editor.setLiveAutocompletionDelay(150);
editor.setLiveAutocompletionThreshold(2);
```

Java completion providers supply proposals through a callback:

```java
AceEditor.addCompletionProvider((source, position, prefix, callback) ->
    callback.invokeWithCompletions(new AceCompletion[]{
      new AceCompletionValue("println", "System.out.println();", "Java", 1000)
    }));
```

Providers registered this way are shared across editors on the page.
`removeAllExistingCompleters()` also clears the shared completers, including
Ace's defaults. Completion services are supplied by the application.

Snippets can contain editable placeholders:

```java
editor.setSnippetsEnabled(true);
editor.insertSnippet("System.out.println(${1:value});$0");
```

The first placeholder is selected after insertion; Tab moves through the
remaining placeholders. Add `snippets/java` to the asset list when using Ace's
predefined Java snippets. The two-argument `AceResources.whenReady(ready, failed)`
loads core, completion/snippets and search UI extensions; it does not select a
language or theme.

## Diagnostics and commands

Annotations describe a problem at a position. Markers highlight a range using an
application CSS class. The application supplies the diagnostic content.

```java
editor.addAnnotation(0, 13, "Review the class name", AceAnnotationType.WARNING);
editor.setAnnotations();
int marker = editor.addMarker(
    AceRange.create(0, 13, 0, 17), "review-range", AceMarkerType.TEXT, false);
```

For example, style `.review-range` with `position: absolute` and a background
colour. Use `clearAnnotations()` and `removeMarker(marker)` to remove the
results. Floating markers follow edits to their anchored range.

`AceCommandDescription` registers Java command callbacks and keyboard shortcuts.
The showcase uses this to bind Ctrl/Cmd+S to saving an in-memory snapshot.
`execCommand(...)` runs a command, and `removeCommandByName(...)` unregisters it.

## Appearance, accessibility and disposal

The Java API includes themes, font size, tab size, soft tabs, wrapping, read-only
mode, gutter and print-margin controls. Additional options expose whitespace,
indent guides, relative line numbers, an empty-document placeholder, an accessible
input label and Ace's keyboard accessibility mode.

```java
editor.setTextInputAriaLabel("Source editor");
editor.setKeyboardAccessibilityEnabled(true);
editor.setPlaceholder("Enter source code");
editor.setShowInvisibles(true);
editor.setRelativeLineNumbers(true);
```

Call `onResize()` when the containing layout changes. Removing the widget destroys
its native editor. `destroy()` can also be called explicitly; repeated start or
destroy calls are safe. To reuse the widget, attach it and call `startEditor()`
again, then restore the text and configuration. History is not restored.

## Implemented scope

The showcase demonstrates Java, JSON and SQL editing, themes, selection,
annotations, markers, Java completion callbacks, snippets, search/replace,
undo/redo, display options, commands and editor recreation. Browser contracts
exercise the same showcase paths on GWT 2.13.1 and TeaVM in Chromium and WebKit.

The port preserves the upstream packages and most method shapes. Source
compatibility is partial; a successful showcase build does not establish every
legacy use case. `AceRange` remains a GWT overlay type; the TeaVM source adapter
supplies its native wrapper. Arbitrary overlay casts on TeaVM are not supported.
Dedicated Java APIs for independent sessions, code lenses, inline ghost text,
diff views and arbitrary extensions are not implemented. `unwrapEditor()` gives
advanced integrations a `JavaScriptObject` handle for the native editor on either
compiler. This replaces the alpha's earlier TeaVM-specific `JSObject` return type. Not every bundled mode or
extension has been tested.

## Build

Use JDK 21 and Maven, with the matching Instanto TeaVM parent and compatibility
artifacts installed. With the project's Playwright browsers available:

```sh
mvn clean verify
```

This builds both library artifacts, the WebJar and both showcases, then runs
the Chromium/WebKit tests for each compiler.
`mvn install` also installs the alpha artifacts into your local Maven repository.
The TeaVM site is in `acegwt-demo/target/site`; the GWT site is in
`acetea-gwt-demo/target/site`. The
[build workflow](.github/workflows/build.yml) records the build environment and
browser installation steps.

## Credits and licenses

AceTea is based on AceGWT commit `b0796a534c05af17a345b9ff48fa2772844547c0`.
Original sources and checksums are retained in `upstream/`.

- **AceGWT**, by Dave Hovemeyer and contributors: MIT; see [LICENSE](LICENSE).
- **Ace**, by Ajax.org B.V. and contributors: BSD-3-Clause. The WebJar retains its
  license, and [the asset manifest](upstream/ace-assets.json) records checksums
  for the pinned `ace-builds@1.45.2` distribution.

The TeaVM adaptation is maintained independently. See [NOTICE](NOTICE). Keep the
bundled licenses and the showcase's `legal/` directory when redistributing.
