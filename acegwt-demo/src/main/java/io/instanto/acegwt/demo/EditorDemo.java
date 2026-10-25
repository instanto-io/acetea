package io.instanto.acegwt.demo;

import com.google.gwt.user.client.ui.RootPanel;
import edu.ycp.cs.dh.acegwt.client.ace.*;
import org.teavm.jso.*;

/** The showcase's editor operations and callbacks all originate in Java. */
public final class EditorDemo {
  private static AceEditor editor;
  private static int changes;
  private static boolean dark = true, readOnly;
  private static final String JAVA =
      "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello from TeaVM!\");\n    }\n}\n";
  private static String saved = JAVA;

  public static void main(String[] args) {
    AceResources.whenReady(
        new String[] {
          "ext-language_tools",
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
    attribute("data-contracts", "passed");
  }

  private static void require(boolean ok, String detail) {
    if (!ok) throw new IllegalStateException("Ace contract: " + detail);
  }

  @JSFunctor
  private interface Action extends JSObject {
    void run();
  }

  @JSBody(
      params = {"id", "a"},
      script = "document.getElementById(id).addEventListener('click',a);")
  private static native void click(String id, Action a);

  @JSBody(params = "a", script = "window.addEventListener('resize',a);")
  private static native void onResize(Action a);

  @JSBody(
      params = {"id", "value"},
      script = "document.getElementById(id).textContent=value;")
  private static native void text(String id, String value);

  @JSBody(
      params = {"key", "value"},
      script = "document.body.setAttribute(key,value);")
  private static native void attribute(String key, String value);

  @JSBody(params = "e", script = "window.showcaseEditor=e;")
  private static native void expose(JSObject e);
}
