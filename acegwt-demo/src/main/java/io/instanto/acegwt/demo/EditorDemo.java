package io.instanto.acegwt.demo;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.ui.RootPanel;
import edu.ycp.cs.dh.acegwt.client.ace.*;
import jsinterop.annotations.JsFunction;

/** The showcase's editor operations and callbacks all originate in Java. */
public final class EditorDemo {
  private static AceEditor editor;
  private static int changes;
  private static boolean dark = true, readOnly, liveCompletion, invisibles, relativeLines;
  private static final String JAVA =
      "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello from TeaVM!\");\n    }\n}\n";
  private static String saved = JAVA;

  public static void main(String[] args) {
    AceResources.whenReady(
        new String[] {
          "ext-language_tools",
          "ext-searchbox",
          "snippets/java",
          "mode-java",
          "mode-json",
          "mode-sql",
          "theme-tomorrow_night",
          "theme-chrome"
        },
        EditorDemo::start,
        failure -> text("output", "Unable to load editor resources: " + failure.getMessage()));
  }

  private static void start() {
    create();
    contracts();
    load("java", JAVA);
    click("java", () -> load("java", JAVA));
    click(
        "json",
        () ->
            load(
                "json",
                "{\n  \"name\": \"AceTea\",\n  \"features\": [\"completion\", \"diagnostics\", \"commands\"],\n  \"ready\": true\n}\n"));
    click(
        "sql",
        () ->
            load(
                "sql",
                "SELECT name, status\nFROM projects\nWHERE compiler = 'TeaVM'\nORDER BY name;\n"));
    click(
        "theme",
        () -> {
          dark = !dark;
          editor.setThemeByName(dark ? "tomorrow_night" : "chrome");
          attribute("data-theme", dark ? "dark" : "light");
        });
    click(
        "readonly",
        () -> {
          readOnly = !readOnly;
          editor.setReadOnly(readOnly);
          text("readonly", readOnly ? "Unlock editing" : "Read only");
        });
    click(
        "diagnostics",
        () -> {
          editor.clearAnnotations();
          editor.addAnnotation(
              2, 8, "Example diagnostic: review this line.", AceAnnotationType.WARNING);
          editor.setAnnotations();
          editor.addMarker(
              AceRange.create(2, 8, 2, 26), "diagnostic-range", AceMarkerType.TEXT, false);
          text("output", "Sample warning displayed at line 3 through the Java annotation API.");
        });
    click(
        "clear",
        () -> {
          editor.clearAnnotations();
          editor.removeAllMarkers();
          text("output", "Diagnostics cleared.");
        });
    click(
        "complete",
        () -> {
          editor.focus();
          editor.execCommand("startAutocomplete");
        });
    click("search", () -> editor.showSearch(true));
    click("undo", () -> editor.undo());
    click("redo", () -> editor.redo());
    click(
        "snippet",
        () -> {
          editor.focus();
          editor.insertSnippet("System.out.println(${1:\"Hello from a snippet\"});$0");
          text(
              "output",
              "Snippet inserted through Java. Type to replace the selected placeholder, then press Tab.");
        });
    click(
        "live",
        () -> {
          liveCompletion = !liveCompletion;
          editor.setLiveAutocompletionEnabled(liveCompletion);
          text("live", liveCompletion ? "Live completion: on" : "Live completion: off");
        });
    click(
        "whitespace",
        () -> {
          invisibles = !invisibles;
          editor.setShowInvisibles(invisibles);
          text("whitespace", invisibles ? "Hide whitespace" : "Show whitespace");
        });
    click(
        "relative",
        () -> {
          relativeLines = !relativeLines;
          editor.setRelativeLineNumbers(relativeLines);
          text("relative", relativeLines ? "Absolute lines" : "Relative lines");
        });
    click(
        "find-java",
        () -> {
          AceRange match =
              editor.find(
                  "System", new AceSearchOptions().withCaseSensitive(true).withWholeWord(true));
          text(
              "output",
              match == null
                  ? "No match for System."
                  : "Found System at line "
                      + (match.getStart().getRow() + 1)
                      + " through Java search.");
        });
    click("save", EditorDemo::save);
    click(
        "recreate",
        () -> {
          saved = editor.getText();
          RootPanel.get("editor-host").remove(editor);
          AceResources.whenReady(
              new String[] {"mode-java"},
              () -> {
                create();
                editor.setText(saved);
              },
              failure -> text("output", failure.getMessage()));
          text(
              "output",
              "Editor destroyed and recreated. Text restored; callbacks registered once.");
        });
    click(
        "select",
        () -> {
          editor.getSelection().select(0, 0, 0, 12);
          text("output", "Selected the first 12 characters through the Java API.");
        });
    onResize(() -> editor.onResize());
    attribute("data-ready", "true");
  }

  private static void create() {
    editor = new AceEditor();
    editor.setSize("100%", "100%");
    RootPanel.get("editor-host").add(editor);
    editor.startEditor();
    editor.setThemeByName(dark ? "tomorrow_night" : "chrome");
    editor.setModeByName("java");
    editor.setFontSize(15);
    editor.setShowPrintMargin(false);
    editor.setUseSoftTabs(true);
    editor.setTabSize(4);
    editor.setAutocompleteEnabled(true);
    editor.setReadOnly(readOnly);
    editor.setPlaceholder("Start typing your code…");
    editor.setTextInputAriaLabel("AceTea source editor");
    editor.setKeyboardAccessibilityEnabled(true);
    editor.setSnippetsEnabled(true);
    editor.setLiveAutocompletionDelay(150);
    editor.setLiveAutocompletionThreshold(2);
    editor.setLiveAutocompletionEnabled(liveCompletion);
    editor.setDisplayIndentGuides(true);
    editor.setHighlightIndentGuides(true);
    editor.setShowInvisibles(invisibles);
    editor.setRelativeLineNumbers(relativeLines);
    editor.addOnChangeHandler(
        e -> {
          changes++;
          text("changes", Integer.toString(changes));
        });
    editor.addOnCursorPositionChangeHandler(
        e -> {
          var p = editor.getCursorPosition();
          text("position", "Ln " + (p.getRow() + 1) + ", Col " + (p.getColumn() + 1));
        });
    editor
        .getSelection()
        .addSelectionListener(
            s -> text("selection", s.isEmpty() ? "No selection" : "Selection active"));
    editor.addCommand(
        new AceCommandDescription(
                "saveDocument",
                e -> {
                  save();
                  return null;
                })
            .withBindKey("Ctrl-S", "Command-S")
            .withReadOnly(true));
    expose(editor.unwrapEditor());
  }

  private static void load(String mode, String value) {
    editor.clearAnnotations();
    editor.removeAllMarkers();
    editor.setModeByName(mode);
    editor.setText(value);
    editor.gotoLine(1);
    editor.resetUndoHistory();
    text(
        "filename",
        mode.equals("java") ? "Main.java" : mode.equals("json") ? "project.json" : "query.sql");
    text("language", mode.toUpperCase());
  }

  private static void save() {
    saved = editor.getText();
    text(
        "output",
        "Snapshot saved in memory ("
            + saved.length()
            + " characters). Ctrl/Cmd+S calls the same Java command.");
  }

  private static void contracts() {
    editor.setText("alpha\nbeta\ngamma");
    require(editor.getText().equals("alpha\nbeta\ngamma"), "text round trip");
    require(editor.getLineCount() == 3, "line count");
    require(editor.getLine(1).equals("beta"), "getLine");
    require(editor.getPositionFromIndex(7).getRow() == 1, "index to position");
    require(
        editor.getIndexFromPosition(new AceEditorCursorPosition(1, 1)) == 7, "position to index");
    editor.getSelection().select(0, 1, 1, 2);
    require(editor.getSelection().isMultiLine(), "selection");
    require(editor.getSelection().getSelectionLead().getRow() == 1, "selection lead");
    editor.getSelection().clearSelection();
    int marker =
        editor.addFloatingMarker(
            AceRange.create(1, 0, 1, 3), "diagnostic-range", AceMarkerType.TEXT);
    require(editor.getMarkers().size() == 1, "marker registration");
    editor.removeMarker(marker);
    require(editor.getMarkers().isEmpty(), "marker removal");
    editor.addAnnotation(1, 0, "Test", AceAnnotationType.ERROR);
    editor.setAnnotations();
    editor.clearAnnotations();
    require(editor.listCommands().contains("saveDocument"), "custom command registration");
    require(
        editor.getCommandDescription("saveDocument").getBindKey().getMac().equals("Command-S"),
        "command round trip");
    editor.execCommand("saveDocument");
    editor.execCommand("insertstring X");
    editor.gotoLine(2);
    require(editor.getCursorPosition().getRow() == 1, "command argument");
    editor.removeCommandByName("saveDocument");
    require(editor.getCommandDescription("saveDocument") == null, "remove command");
    editor.addCommand(
        new AceCommandDescription(
                "saveDocument",
                e -> {
                  save();
                  return null;
                })
            .withBindKey("Ctrl-S", "Command-S")
            .withReadOnly(true));
    AceEditor.removeAllExistingCompleters();
    AceEditor.addCompletionProvider(
        (e, pos, prefix, callback) ->
            callback.invokeWithCompletions(
                new AceCompletion[] {
                  new AceCompletionValue("println", "System.out.println(\"Hello\");", "Java", 1000),
                  new AceCompletionSnippet(
                      "main",
                      "public static void main(String[] args) {\n    ${1:// code}\n}",
                      900,
                      "snippet",
                      null)
                }));
    modernContracts();
    attribute("data-contracts", "passed");
  }

  private static void modernContracts() {
    editor.setText("alpha ALPHA alphabet\nbeta alpha");
    editor.gotoLine(1);
    var literal =
        new AceSearchOptions().withCaseSensitive(true).withWholeWord(true).withSkipCurrent(false);
    AceRange first = editor.find("alpha", literal);
    require(
        first != null && first.getStart().getRow() == 0 && first.getEnd().getColumn() == 5,
        "search range");
    AceRange next =
        editor.find("alpha", new AceSearchOptions().withCaseSensitive(true).withWholeWord(true));
    require(next != null && next.getStart().getRow() == 1, "search next whole word");
    require(editor.find("missing") == null, "search no match");
    require(editor.replaceAll("alpha", "x", literal) == 2, "replace whole words");
    require(editor.getText().equals("x ALPHA alphabet\nbeta x"), "replace respects case");
    require(editor.replaceAll("ALPHA", "y", new AceSearchOptions()) == 2, "search options reset");
    require(editor.getText().equals("x y ybet\nbeta x"), "literal replacement");
    editor.setText("one 12 two 34");
    require(
        editor.replaceAll("[0-9]+", "#", new AceSearchOptions().withRegExp(true)) == 2,
        "regular expression");
    require(editor.getText().equals("one # two #"), "regular expression result");
    editor.setText("base");
    editor.gotoLine(1);
    editor.resetUndoHistory();
    require(!editor.canUndo() && !editor.canRedo(), "history reset");
    editor.insertAtCursor("added ");
    require(editor.canUndo(), "undo available");
    editor.undo();
    require(editor.getText().equals("base") && editor.canRedo(), "undo pending Java edit");
    editor.redo();
    require(editor.getText().equals("added base"), "redo Java edit");
    editor.startUndoGroup();
    editor.insertAtCursor("second ");
    editor.undo();
    require(editor.getText().equals("added base"), "undo group boundary");
    editor.setText("");
    editor.insertSnippet("hello ${1:world}$0");
    require(editor.getText().equals("hello world"), "snippet expansion");
    require(!editor.getSelection().isEmpty(), "snippet placeholder selected");
    editor.insertAtCursor("Java");
    require(editor.getText().equals("hello Java"), "snippet placeholder replacement");
    editor.execCommand("goToNextSnippetTabstop");
    editor.resetUndoHistory();
    boolean invalid = false;
    try {
      editor.setLiveAutocompletionDelay(-1);
    } catch (IllegalArgumentException expected) {
      invalid = true;
    }
    require(invalid, "reject negative completion delay");
    AceEditor stopped = new AceEditor();
    boolean guarded = false;
    try {
      stopped.undo();
    } catch (IllegalStateException expected) {
      guarded = true;
    }
    require(guarded, "new bindings require started editor");
  }

  private static void require(boolean ok, String detail) {
    if (!ok) throw new IllegalStateException("Ace contract: " + detail);
  }

  @JsFunction
  private interface Action {
    void run();
  }

  private static native void click(
      String id, Action a) /*-{ $doc.getElementById(id).addEventListener('click',a); }-*/;

  private static native void onResize(Action a) /*-{ $wnd.addEventListener('resize',a); }-*/;

  private static native void text(
      String id, String value) /*-{ $doc.getElementById(id).textContent=value; }-*/;

  private static native void attribute(
      String key, String value) /*-{ $doc.body.setAttribute(key,value); }-*/;

  private static native void expose(JavaScriptObject e) /*-{ $wnd.showcaseEditor=e; }-*/;
}
