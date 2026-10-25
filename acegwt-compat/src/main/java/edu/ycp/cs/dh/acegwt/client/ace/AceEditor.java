// Copyright (c) 2011-2014, David H. Hovemeyer <david.hovemeyer@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.dom.client.Element;
import com.google.gwt.user.client.TakesValue;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HasText;
import com.google.gwt.user.client.ui.RequiresResize;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * A GWT widget for the Ajax.org Code Editor (ACE).
 *
 * @see <a href="http://ace.ajax.org/">Ajax.org Code Editor</a>
 */
public class AceEditor extends Composite implements RequiresResize, HasText, TakesValue<String> {
  public void setSize(String width, String height) {
    getElement().getStyle().setProperty("width", width);
    getElement().getStyle().setProperty("height", height);
  }

  // Used to generate unique element ids for Ace widgets.
  private static int nextId = 0;

  private final String elementId;

  private JavaScriptObject editor;

  private org.teavm.jso.JSObject annotations = AceNative.array();
  private final int registryId = nextId;
  private static final Map<Integer, AceEditor> EDITORS = new HashMap<>();

  private Element divElement;

  private HashMap<Integer, AceRange> markers = new HashMap<Integer, AceRange>();

  private AceSelection selection = null;

  private AceCommandLine commandLine = null;

  /** Preferred constructor. */
  public AceEditor() {
    elementId = "_aceGWT" + nextId;
    nextId++;
    FlowPanel div = new FlowPanel();
    div.getElement().setId(elementId);
    initWidget(div);
    divElement = div.getElement();
  }

  /**
   * Do not use this constructor: just use the default constructor.
   *
   * @param unused this parameter is ignored
   */
  @Deprecated
  public AceEditor(boolean unused) {
    this();
  }

  /**
   * Call this method to start the editor. Make sure that the widget has been attached to the DOM
   * tree before calling this method.
   */
  public void startEditor() {
    if (editor != null) return;
    editor = JavaScriptObject.of(createEditor(divElement.unwrap(), registryId));
    EDITORS.put(registryId, this);
    redisplay();
  }

  /**
   * Call this to force the editor contents to be redisplayed. There seems to be a problem when an
   * AceEditor is embedded in a LayoutPanel: the editor contents don't appear, and it refuses to
   * accept focus and mouse events, until the browser window is resized. Calling this method works
   * around the problem by forcing the underlying editor to redisplay itself fully. (?)
   */
  public void redisplay() {
    redisplayBridge1(editor.unwrap());
  }

  /** Cleans up the entire editor. */
  public void destroy() {
    if (editor == null) return;
    removeAllMarkers();
    destroyEditor(editor.unwrap());
    editor = null;
    selection = null;
    resetAnnotations();
    EDITORS.remove(registryId);
  }

  /**
   * Set the theme.
   *
   * @param theme the theme (one of the values in the {@link AceEditorTheme} enumeration)
   */
  public void setTheme(final AceEditorTheme theme) {
    setThemeByName(theme.getName());
  }

  /**
   * Set the theme by name.
   *
   * @param themeName the theme name (e.g., "twilight")
   */
  public void setThemeByName(String themeName) {
    setThemeByNameBridge2(editor.unwrap(), themeName);
  }

  /**
   * Set the mode.
   *
   * @param mode the mode (one of the values in the {@link AceEditorMode} enumeration)
   */
  public void setMode(final AceEditorMode mode) {
    setModeByName(mode.getName());
  }

  /**
   * Set the mode by name.
   *
   * @param shortModeName name of mode (e.g., "eclipse")
   */
  public void setModeByName(String shortModeName) {
    setModeByNameBridge3(editor.unwrap(), shortModeName);
  }

  /**
   * Enable a worker for the current session.
   *
   * @param userWorker true to enable a worker otherwise false
   */
  public void setUseWorker(boolean useWorker) {
    setUseWorkerBridge4(editor.unwrap(), useWorker);
  }

  /**
   * Register a handler for change events generated by the editor.
   *
   * @param callback the change event handler
   */
  public void addOnChangeHandler(AceEditorCallback callback) {
    listen(
        editor.unwrap(),
        "session",
        "change",
        e -> callback.invokeAceCallback(JavaScriptObject.of(e)));
  }

  /**
   * Register a handler for cursor position change events generated by the editor.
   *
   * @param callback the cursor position change event handler
   */
  public void addOnCursorPositionChangeHandler(AceEditorCallback callback) {
    listen(
        editor.unwrap(),
        "selection",
        "changeCursor",
        e -> callback.invokeAceCallback(JavaScriptObject.of(e)));
  }

  /**
   * Give font size
   *
   * @return font size
   */
  public int getFontSize() {
    return getFontSizeBridge5(editor.unwrap());
  }

  /**
   * Set font size.
   *
   * @param fontSize the font size to set, e.g., "16px"
   */
  public void setFontSize(String fontSize) {
    setFontSizeBridge6(editor.unwrap(), fontSize);
  }

  /**
   * Set integer font size.
   *
   * @param fontSize the font size to set, e.g., 16
   */
  public void setFontSize(int fontSize) {
    setFontSizeBridge7(editor.unwrap(), fontSize);
  }

  /**
   * Get the complete text in the editor as a String.
   *
   * @return the text in the editor
   */
  public String getText() {
    return getTextBridge8(editor.unwrap());
  }

  /** Causes the editor to gain input focus. */
  public void focus() {
    focusBridge9(editor.unwrap());
  }

  /**
   * Retrieves the number of lines in the editor.
   *
   * @return The number of lines in the editor.
   */
  public int getLineCount() {
    return getLineCountBridge10(editor.unwrap());
  }

  /**
   * Set the complete text in the editor from a String.
   *
   * @param text the text to set in the editor
   */
  public void setText(String text) {
    setTextBridge11(editor.unwrap(), text);
  }

  /**
   * Get the line of text at the given row number.
   *
   * @param row the row number
   * @return the line of text at that row number
   */
  public String getLine(int row) {
    return getLineBridge12(editor.unwrap(), row);
  }

  /**
   * Insert given text at the cursor.
   *
   * @param text text to insert at the cursor
   */
  public void insertAtCursor(String text) {
    insertAtCursorBridge13(editor.unwrap(), text);
  }

  /**
   * Get the current cursor position.
   *
   * @return the current cursor position
   */
  public AceEditorCursorPosition getCursorPosition() {
    return AceNative.position(AceNative.callObject(editor.unwrap(), "getCursorPosition"));
  }

  private AceEditorCursorPosition getCursorPositionImpl(final double row, final double column) {
    return new AceEditorCursorPosition((int) row, (int) column);
  }

  /**
   * Gets the given document position as a zero-based index.
   *
   * @param position the position to obtain the absolute index of (base zero)
   * @return An index to the current location in the document
   */
  public int getIndexFromPosition(AceEditorCursorPosition position) {
    return getIndexFromPositionImpl(position.toJsObject());
  }

  private int getIndexFromPositionImpl(JavaScriptObject jsPosition) {
    return getIndexFromPositionImplBridge14(editor.unwrap(), jsPosition.unwrap());
  }

  /**
   * Gets a document position from a supplied zero-based index.
   *
   * @param index (base zero)
   * @return A position object showing the row and column of the supplied index in the document
   */
  public AceEditorCursorPosition getPositionFromIndex(int index) {
    return AceNative.position(positionFromIndex(editor.unwrap(), index));
  }

  /**
   * Set whether or not soft tabs should be used.
   *
   * @param useSoftTabs true if soft tabs should be used, false otherwise
   */
  public void setUseSoftTabs(boolean useSoftTabs) {
    setUseSoftTabsBridge15(editor.unwrap(), useSoftTabs);
  }

  /**
   * Set tab size. (Default is 4.)
   *
   * @param tabSize the tab size to set
   */
  public void setTabSize(int tabSize) {
    setTabSizeBridge16(editor.unwrap(), tabSize);
  }

  /**
   * Go to given line.
   *
   * @param line the line to go to
   */
  public void gotoLine(int line) {
    gotoLineBridge17(editor.unwrap(), line);
  }

  /**
   * Set whether or not the horizontal scrollbar is always visible.
   *
   * @param hScrollBarAlwaysVisible true if the horizontal scrollbar is always visible, false if it
   *     is hidden when not needed
   */
  public void setHScrollBarAlwaysVisible(boolean hScrollBarAlwaysVisible) {
    setHScrollBarAlwaysVisibleBridge18(editor.unwrap(), hScrollBarAlwaysVisible);
  }

  /**
   * Set whether or not the gutter is shown.
   *
   * @param showGutter true if the gutter should be shown, false if it should be hidden
   */
  public void setShowGutter(boolean showGutter) {
    setShowGutterBridge19(editor.unwrap(), showGutter);
  }

  /**
   * Set or unset read-only mode.
   *
   * @param readOnly true if editor should be set to readonly, false if the editor should be set to
   *     read-write
   */
  public void setReadOnly(boolean readOnly) {
    setReadOnlyBridge20(editor.unwrap(), readOnly);
  }

  /**
   * Set or unset highlighting of currently selected word.
   *
   * @param highlightSelectedWord true to highlight currently selected word, false otherwise
   */
  public void setHighlightSelectedWord(boolean highlightSelectedWord) {
    setHighlightSelectedWordBridge21(editor.unwrap(), highlightSelectedWord);
  }

  /**
   * Set or unset the visibility of the print margin.
   *
   * @param showPrintMargin true if the print margin should be shown, false otherwise
   */
  public void setShowPrintMargin(boolean showPrintMargin) {
    setShowPrintMarginBridge22(editor.unwrap(), showPrintMargin);
  }

  /**
   * Add an annotation to a the local <code>annotations</code> JsArray&lt;AceAnnotation&gt;, but
   * does not set it on the editor
   *
   * @param row to which the annotation should be added
   * @param column to which the annotation applies
   * @param text to display as a tooltip with the annotation
   * @param type to be displayed (one of the values in the {@link AceAnnotationType} enumeration)
   */
  public void addAnnotation(
      final int row, final int column, final String text, final AceAnnotationType type) {
    AceNative.push(annotations, AceAnnotation.create(row, column, text, type.getName()).unwrap());
  }

  /** Set any annotations which have been added via <code>addAnnotation</code> on the editor */
  public void setAnnotations() {
    applyAnnotations(editor.unwrap(), annotations);
  }

  /**
   * Clear any annotations from the editor and reset the local <code>annotations</code>
   * JsArray&lt;AceAnnotation&gt;
   */
  public void clearAnnotations() {
    resetAnnotations();
    applyAnnotations(editor.unwrap(), annotations);
  }

  /** Reset any annotations in the local <code>annotations</code> JsArray<AceAnnotation> */
  private void resetAnnotations() {
    annotations = AceNative.array();
  }

  /**
   * Remove a command from the editor.
   *
   * @param command the command (one of the values in the {@link AceCommand} enumeration)
   */
  public void removeCommand(final AceCommand command) {
    removeCommandByName(command.getName());
  }

  /**
   * Execute a command with no arguments. See {@link AceCommand} values for example.
   *
   * @param command the command (one of the values in the {@link AceCommand} enumeration)
   */
  public void execCommand(AceCommand command) {
    execCommand(command, null);
  }

  /**
   * Execute a command with arguments (in case args is not null). See {@link AceCommand} values for
   * example.
   *
   * @param command the command (one of the values in the {@link AceCommand} enumeration)
   * @param args command arguments (string or map)
   */
  public void execCommand(AceCommand command, AceCommandArgs args) {
    execCommand(command.getName(), args);
  }

  /**
   * Execute a command possibly containing string argument.
   *
   * @param command the command which could be one or two words separated by whitespaces
   */
  public void execCommand(String command) {
    String[] parts = command.trim().split("\\s+", 2);
    execCommand(parts[0], parts.length > 1 ? parts[1] : null);
  }

  /**
   * Execute a command with arguments (in case args is not null).
   *
   * @param command one word command
   * @param args command argument
   */
  public void execCommand(String command, String arg) {
    execCommandHidden(command, arg);
  }

  /**
   * Execute a command with arguments (in case args is not null).
   *
   * @param command one word command
   * @param args command arguments of type {@link AceCommandArgs}
   */
  public void execCommand(String command, AceCommandArgs args) {
    execCommandHidden(command, args);
  }

  private void execCommandHidden(String command, Object args) {
    Object value = args instanceof AceCommandArgs ? ((AceCommandArgs) args).getValue() : args;
    execute(editor.unwrap(), command, AceNative.argument(value));
  }

  /**
   * Remove commands, that may not be required, from the editor
   *
   * @param command to be removed, one of "gotoline", "findnext", "findprevious", "find", "replace",
   *     "replaceall"
   */
  public void removeCommandByName(String command) {
    removeCommandByNameBridge23(editor.unwrap(), command);
  }

  /**
   * Construct java wrapper for registered Ace command.
   *
   * @param command name of command
   * @return command description
   */
  public AceCommandDescription getCommandDescription(String command) {
    return AceCommandDescription.fromJavaScript(
        JavaScriptObject.of(command(editor.unwrap(), command)));
  }

  /**
   * List names of all Ace commands.
   *
   * @return names of all Ace commands
   */
  public List<String> listCommands() {
    return java.util.Arrays.asList(commands(editor.unwrap()));
  }

  /**
   * Add user defined command.
   *
   * @param description command description
   */
  public void addCommand(AceCommandDescription description) {
    addNativeCommand(editor.unwrap(), description.toJavaScript(this).unwrap());
  }

  /**
   * Set whether to use wrap mode or not
   *
   * @param useWrapMode true if word wrap should be used, false otherwise
   */
  public void setUseWrapMode(boolean useWrapMode) {
    setUseWrapModeBridge24(editor.unwrap(), useWrapMode);
  }

  /* (non-Javadoc)
   * @see com.google.gwt.user.client.ui.ResizeComposite#onResize()
   */
  @Override
  public void onResize() {
    if (editor != null) redisplay();
  }

  @Override
  public void setValue(String value) {
    this.setText(value);
  }

  @Override
  public String getValue() {
    return this.getText();
  }

  /**
   * Set whether or not autocomplete is enabled.
   *
   * @param b true if autocomplete should be enabled, false if not
   */
  public void setAutocompleteEnabled(boolean b) {
    setAutocompleteEnabledBridge25(editor.unwrap(), b);
  }

  /**
   * Removes all existing completers from the langtools<br>
   * <br>
   * This can be used to disable all completers including local completers, which can be very useful
   * when completers are used on very large files (as the local completer tokenizes every word to
   * put in the selected list).<br>
   * <br>
   * <strong>NOTE:</strong> This method may be removed, and replaced with another solution. It works
   * at point of check-in, but treat this as unstable for now.
   */
  public static void removeAllExistingCompleters() {
    removeAllExistingCompletersBridge26();
  }

  /**
   * Add an {@link AceCompletionProvider} to provide custom code completions.
   *
   * <p><strong>Warning</strong>: this is an experimental feature of AceGWT. It is possible that the
   * API will change in an incompatible way in future releases.
   *
   * @param provider the {@link AceCompletionProvider}
   */
  public static void addCompletionProvider(AceCompletionProvider provider) {
    addCompleter(
        (id, row, column, prefix, callback) -> {
          AceEditor target = EDITORS.get(id);
          if (target == null) return;
          provider.getProposals(
              target,
              AceEditorCursorPosition.create(row, column),
              prefix,
              wrapCompletionCallback(JavaScriptObject.of(callback)));
        });
  }

  /**
   * Adds a static marker into this editor.
   *
   * @param range an {@link AceRange}.
   * @param clazz a CSS class that must be applied to the marker.
   * @param type an {@link AceMarkerType}.
   * @param inFront set to 'true' if the marker must be in front of the text, 'false' otherwise.
   * @return The marker ID. This id can be then use to remove a marker from the editor.
   */
  public int addMarker(AceRange range, String clazz, AceMarkerType type, boolean inFront) {
    int id = marker(editor.unwrap(), range.unwrap(), clazz, type.getName(), inFront);
    addMarker(id, range);
    return id;
  }

  /**
   * Adds a floating marker into this editor (the marker follows lines changes as insertions,
   * suppressions...).
   *
   * @param range an {@link AceRange}.
   * @param clazz a CSS class that must be applied to the marker.
   * @param type an {@link AceMarkerType}.
   * @return The marker ID. This id can be then use to remove a marker from the editor.
   */
  public int addFloatingMarker(AceRange range, String clazz, AceMarkerType type) {
    anchor(editor.unwrap(), range.unwrap());
    return addMarker(range, clazz, type, false);
  }

  /**
   * Removes the marker with the specified ID.
   *
   * @param markerId the marker ID.
   */
  public void removeMarker(int markerId) {
    removeNativeMarker(editor.unwrap(), markerId);
    removeRegisteredMarker(markerId);
  }

  /**
   * Gets all the displayed markers.
   *
   * @return An unmodifiable Mapping between markerID and the displayed range.
   */
  public Map<Integer, AceRange> getMarkers() {
    return Collections.unmodifiableMap(this.markers);
  }

  /** Remove all the displayed markers. */
  public void removeAllMarkers() {
    Integer[] ids = this.markers.keySet().toArray(new Integer[this.markers.size()]);
    for (Integer id : ids) {
      removeMarker(id);
    }
  }

  private void addMarker(int id, AceRange range) {
    markers.put(id, range);
  }

  private void removeRegisteredMarker(int id) {
    AceRange range = markers.remove(id);
    if (range != null) range.detach();
  }

  /**
   * Prepare a wrapper around Ace Selection object.
   *
   * @return a wrapper around Ace Selection object
   */
  public AceSelection getSelection() {
    if (selection == null) selection = new AceSelection(getSelectionJS());
    return selection;
  }

  private JavaScriptObject getSelectionJS() {
    return JavaScriptObject.of(getSelectionJSBridge27(editor.unwrap()));
  }

  /**
   * Bind command line and editor. For default implementation of command line you can use <code>
   *  AceCommandLine cmdLine = new AceDefaultCommandLine(textBox) </code> where textBox could be for
   * instance standard GWT TextBox or TextArea.
   *
   * @param cmdLine implementation of command line
   */
  public void initializeCommandLine(AceCommandLine cmdLine) {
    this.commandLine = cmdLine;
    this.commandLine.setCommandLineListener(
        new AceCommandLineListener() {
          @Override
          public void onCommandEntered(String command) {
            execCommand(command);
          }
        });
  }

  private static AceCompletionCallback wrapCompletionCallback(JavaScriptObject jsCallback) {

    return new AceCompletionCallbackImpl(jsCallback);
  }

  /** Enable completion while typing. Requires ext-language_tools to be loaded first. */
  public void setLiveAutocompletionEnabled(boolean enabled) {
    requireLanguageTools();
    booleanOption(unwrapEditor(), "enableLiveAutocompletion", enabled);
  }

  /** Delay before live completion, in milliseconds. Requires ext-language_tools. */
  public void setLiveAutocompletionDelay(int milliseconds) {
    if (milliseconds < 0) throw new IllegalArgumentException("Negative completion delay");
    requireLanguageTools();
    numberOption(unwrapEditor(), "liveAutocompletionDelay", milliseconds);
  }

  /** Minimum prefix length for live completion. Requires ext-language_tools. */
  public void setLiveAutocompletionThreshold(int characters) {
    if (characters < 0) throw new IllegalArgumentException("Negative completion threshold");
    requireLanguageTools();
    numberOption(unwrapEditor(), "liveAutocompletionThreshold", characters);
  }

  /** Enable Tab expansion of registered snippets. Requires ext-language_tools. */
  public void setSnippetsEnabled(boolean enabled) {
    requireLanguageTools();
    booleanOption(unwrapEditor(), "enableSnippets", enabled);
  }

  /** Insert an Ace snippet, including numbered placeholders. Requires ext-language_tools. */
  public void insertSnippet(String snippet) {
    java.util.Objects.requireNonNull(snippet, "snippet");
    requireLanguageTools();
    insertNativeSnippet(unwrapEditor(), snippet);
  }

  private static void requireLanguageTools() {
    if (!hasModule("ace/ext/language_tools"))
      throw new IllegalStateException("Load ext-language_tools with AceResources.whenReady first");
  }

  /** Find and select a match, or return null. Options do not leak from previous searches. */
  public AceRange find(String needle, AceSearchOptions options) {
    return AceRange.wrap(findNative(unwrapEditor(), searchOptions(needle, options)));
  }

  /** Find literal text, case-insensitively, wrapping at the end of the document. */
  public AceRange find(String needle) {
    return find(needle, new AceSearchOptions());
  }

  /** Replace all matches in the document and return the replacement count. */
  public int replaceAll(String needle, String replacement, AceSearchOptions options) {
    java.util.Objects.requireNonNull(replacement, "replacement");
    return replaceAllNative(unwrapEditor(), replacement, searchOptions(needle, options));
  }

  private static org.teavm.jso.JSObject searchOptions(String needle, AceSearchOptions options) {
    java.util.Objects.requireNonNull(needle, "needle");
    if (needle.isEmpty()) throw new IllegalArgumentException("Empty search text");
    return java.util.Objects.requireNonNull(options, "options").toNative(needle);
  }

  /** Open Ace's search/replace panel. Requires ext-searchbox to be loaded first. */
  public void showSearch(boolean showReplace) {
    if (!hasModule("ace/ext/searchbox"))
      throw new IllegalStateException("Load ext-searchbox with AceResources.whenReady first");
    showNativeSearch(unwrapEditor(), showReplace);
  }

  /** Undo the last edit, flushing pending changes into Ace's history first. */
  public void undo() {
    historyAction(unwrapEditor(), false);
  }

  /** Redo the last undone edit. */
  public void redo() {
    historyAction(unwrapEditor(), true);
  }

  public boolean canUndo() {
    return hasHistory(unwrapEditor(), false);
  }

  public boolean canRedo() {
    return hasHistory(unwrapEditor(), true);
  }

  /** Start a separate undo group for subsequent programmatic edits. */
  public void startUndoGroup() {
    markUndoGroup(unwrapEditor());
  }

  /** Clear undo/redo history, for example after loading a different document. */
  public void resetUndoHistory() {
    resetHistory(unwrapEditor());
  }

  /** Text shown when the document is empty. */
  public void setPlaceholder(String placeholder) {
    stringOption(unwrapEditor(), "placeholder", java.util.Objects.requireNonNull(placeholder));
  }

  /** Accessible label for Ace's actual text input. */
  public void setTextInputAriaLabel(String label) {
    stringOption(unwrapEditor(), "textInputAriaLabel", java.util.Objects.requireNonNull(label));
  }

  /** Enable Ace's keyboard navigation accessibility mode. */
  public void setKeyboardAccessibilityEnabled(boolean enabled) {
    booleanOption(unwrapEditor(), "enableKeyboardAccessibility", enabled);
  }

  public void setShowInvisibles(boolean enabled) {
    booleanOption(unwrapEditor(), "showInvisibles", enabled);
  }

  public void setDisplayIndentGuides(boolean enabled) {
    booleanOption(unwrapEditor(), "displayIndentGuides", enabled);
  }

  public void setHighlightIndentGuides(boolean enabled) {
    booleanOption(unwrapEditor(), "highlightIndentGuides", enabled);
  }

  public void setRelativeLineNumbers(boolean enabled) {
    booleanOption(unwrapEditor(), "relativeLineNumbers", enabled);
  }

  @org.teavm.jso.JSBody(params = "name", script = "return !!ace.require(name);")
  private static native boolean hasModule(String name);

  @org.teavm.jso.JSBody(
      params = {"e", "name", "value"},
      script = "e.setOption(name,value);")
  private static native void booleanOption(org.teavm.jso.JSObject e, String name, boolean value);

  @org.teavm.jso.JSBody(
      params = {"e", "name", "value"},
      script = "e.setOption(name,value);")
  private static native void numberOption(org.teavm.jso.JSObject e, String name, int value);

  @org.teavm.jso.JSBody(
      params = {"e", "name", "value"},
      script = "e.setOption(name,value);")
  private static native void stringOption(org.teavm.jso.JSObject e, String name, String value);

  @org.teavm.jso.JSBody(
      params = {"e", "snippet"},
      script = "ace.require('ace/snippets').snippetManager.insertSnippet(e,snippet);")
  private static native void insertNativeSnippet(org.teavm.jso.JSObject e, String snippet);

  @org.teavm.jso.JSBody(
      params = {"e", "options"},
      script = "return e.find(options) || null;")
  private static native org.teavm.jso.JSObject findNative(
      org.teavm.jso.JSObject e, org.teavm.jso.JSObject options);

  @org.teavm.jso.JSBody(
      params = {"e", "replacement", "options"},
      script = "return e.replaceAll(replacement,options);")
  private static native int replaceAllNative(
      org.teavm.jso.JSObject e, String replacement, org.teavm.jso.JSObject options);

  @org.teavm.jso.JSBody(
      params = {"e", "replace"},
      script = "ace.require('ace/ext/searchbox').Search(e,replace);")
  private static native void showNativeSearch(org.teavm.jso.JSObject e, boolean replace);

  @org.teavm.jso.JSBody(
      params = {"e", "redo"},
      script = "e.session.markUndoGroup(); if(redo) e.redo(); else e.undo();")
  private static native void historyAction(org.teavm.jso.JSObject e, boolean redo);

  @org.teavm.jso.JSBody(
      params = {"e", "redo"},
      script =
          "e.session.markUndoGroup(); var u=e.session.getUndoManager(); return redo ? u.hasRedo() : u.hasUndo();")
  private static native boolean hasHistory(org.teavm.jso.JSObject e, boolean redo);

  @org.teavm.jso.JSBody(
      params = "e",
      script = "e.session.markUndoGroup(); e.session.getUndoManager().startNewGroup();")
  private static native void markUndoGroup(org.teavm.jso.JSObject e);

  @org.teavm.jso.JSBody(
      params = "e",
      script = "e.session.markUndoGroup(); e.session.getUndoManager().reset();")
  private static native void resetHistory(org.teavm.jso.JSObject e);

  /** Underlying editor for optional TeaVM integrations. Available after startEditor(). */
  public org.teavm.jso.JSObject unwrapEditor() {
    if (editor == null) throw new IllegalStateException("Editor is not started");
    return editor.unwrap();
  }

  public boolean isStarted() {
    return editor != null;
  }

  @Override
  protected void onUnload() {
    destroy();
    super.onUnload();
  }

  @org.teavm.jso.JSBody(
      params = {"element", "id"},
      script = "var e=ace.edit(element); e.session.setUseWorker(false); e.__aceGwtId=id; return e;")
  private static native org.teavm.jso.JSObject createEditor(org.teavm.jso.JSObject element, int id);

  @org.teavm.jso.JSBody(params = "e", script = "e.destroy(); e.container.textContent='';")
  private static native void destroyEditor(org.teavm.jso.JSObject e);

  @org.teavm.jso.JSBody(
      params = {"e", "target", "name", "listener"},
      script = "(target==='session'?e.session:e.selection).on(name,listener);")
  private static native void listen(
      org.teavm.jso.JSObject e, String target, String name, AceNative.Event listener);

  @org.teavm.jso.JSBody(
      params = {"e", "i"},
      script = "return e.session.doc.indexToPosition(i);")
  private static native org.teavm.jso.JSObject positionFromIndex(org.teavm.jso.JSObject e, int i);

  @org.teavm.jso.JSBody(
      params = {"e", "a"},
      script = "e.session.setAnnotations(a);")
  private static native void applyAnnotations(org.teavm.jso.JSObject e, org.teavm.jso.JSObject a);

  @org.teavm.jso.JSBody(
      params = {"e", "c", "a"},
      script = "e.commands.exec(c,e,a); e.focus();")
  private static native void execute(org.teavm.jso.JSObject e, String c, org.teavm.jso.JSObject a);

  @org.teavm.jso.JSBody(
      params = {"e", "c"},
      script = "return e.commands.commands[c] || null;")
  private static native org.teavm.jso.JSObject command(org.teavm.jso.JSObject e, String c);

  @org.teavm.jso.JSBody(params = "e", script = "return Object.keys(e.commands.commands);")
  private static native String[] commands(org.teavm.jso.JSObject e);

  @org.teavm.jso.JSBody(
      params = {"e", "c"},
      script = "e.commands.addCommand(c);")
  private static native void addNativeCommand(org.teavm.jso.JSObject e, org.teavm.jso.JSObject c);

  @org.teavm.jso.JSBody(
      params = "f",
      script =
          "ace.require('ace/ext/language_tools').addCompleter({getCompletions:function(e,s,p,prefix,cb){f(e.__aceGwtId,p.row,p.column,prefix,cb);},getDocTooltip:function(item){if(!item.docHTML && item.aceGwtHtmlTooltip)item.docHTML=item.aceGwtHtmlTooltip;}});")
  private static native void addCompleter(AceNative.Completion f);

  @org.teavm.jso.JSBody(
      params = {"e", "r", "c", "t", "front"},
      script = "return e.session.addMarker(r,c,t,front);")
  private static native int marker(
      org.teavm.jso.JSObject e, org.teavm.jso.JSObject r, String c, String t, boolean front);

  @org.teavm.jso.JSBody(
      params = {"e", "r"},
      script =
          "r.start=e.session.doc.createAnchor(r.start); r.end=e.session.doc.createAnchor(r.end);")
  private static native void anchor(org.teavm.jso.JSObject e, org.teavm.jso.JSObject r);

  @org.teavm.jso.JSBody(
      params = {"e", "id"},
      script = "e.session.removeMarker(id);")
  private static native void removeNativeMarker(org.teavm.jso.JSObject e, int id);

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script =
          "\n\t\t\n\t\thandle.renderer.onResize(true);\n\t\thandle.renderer.updateFull();\n\t\thandle.resize();\n\t\thandle.focus();\n\t")
  private static native void redisplayBridge1(org.teavm.jso.JSObject handle);

  @org.teavm.jso.JSBody(
      params = {"handle", "themeName"},
      script = "\n\t\t\n\t\thandle.setTheme(\"ace/theme/\" + themeName);\n\t")
  private static native void setThemeByNameBridge2(org.teavm.jso.JSObject handle, String themeName);

  @org.teavm.jso.JSBody(
      params = {"handle", "shortModeName"},
      script =
          "\n\t\t\n\t\tvar modeName = \"ace/mode/\" + shortModeName;\n\t\tvar TheMode = window.ace.require(modeName).Mode;\n\t\thandle.getSession().setMode(new TheMode());\n\t")
  private static native void setModeByNameBridge3(
      org.teavm.jso.JSObject handle, String shortModeName);

  @org.teavm.jso.JSBody(
      params = {"handle", "useWorker"},
      script =
          "\n                \n                handle.getSession().setUseWorker(useWorker);\n        ")
  private static native void setUseWorkerBridge4(org.teavm.jso.JSObject handle, boolean useWorker);

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script = "\n\t\t\n\t\treturn handle.getFontSize();\n\t")
  private static native int getFontSizeBridge5(org.teavm.jso.JSObject handle);

  @org.teavm.jso.JSBody(
      params = {"handle", "fontSize"},
      script = "\n\t\t\n\t\thandle.setFontSize(fontSize);\n\t")
  private static native void setFontSizeBridge6(org.teavm.jso.JSObject handle, String fontSize);

  @org.teavm.jso.JSBody(
      params = {"handle", "fontSize"},
      script = "\n\t\t\n\t\thandle.setFontSize(fontSize);\n\t")
  private static native void setFontSizeBridge7(org.teavm.jso.JSObject handle, int fontSize);

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script = "\n\t\t\n\t\treturn handle.getSession().getValue();\n\t")
  private static native String getTextBridge8(org.teavm.jso.JSObject handle);

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script = "\n\t\t\n\t\thandle.focus();\n\t")
  private static native void focusBridge9(org.teavm.jso.JSObject handle);

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script = "\n\t\t\n\t\treturn handle.session.getLength();\n\t")
  private static native int getLineCountBridge10(org.teavm.jso.JSObject handle);

  @org.teavm.jso.JSBody(
      params = {"handle", "text"},
      script = "\n\t\t\n\t\thandle.getSession().setValue(text);\n\t")
  private static native void setTextBridge11(org.teavm.jso.JSObject handle, String text);

  @org.teavm.jso.JSBody(
      params = {"handle", "row"},
      script = "\n\t\t\n\t\treturn handle.getSession().getDocument().getLine(row);\n\t")
  private static native String getLineBridge12(org.teavm.jso.JSObject handle, int row);

  @org.teavm.jso.JSBody(
      params = {"handle", "text"},
      script = "\n\t\t\n\t\thandle.insert(text);\n\t")
  private static native void insertAtCursorBridge13(org.teavm.jso.JSObject handle, String text);

  @org.teavm.jso.JSBody(
      params = {"handle", "jsPosition"},
      script =
          "\n\t\t\n\t\treturn handle.getSession().getDocument().positionToIndex(jsPosition);\n\t")
  private static native int getIndexFromPositionImplBridge14(
      org.teavm.jso.JSObject handle, org.teavm.jso.JSObject jsPosition);

  @org.teavm.jso.JSBody(
      params = {"handle", "useSoftTabs"},
      script = "\n\t\t\n\t\thandle.getSession().setUseSoftTabs(useSoftTabs);\n\t")
  private static native void setUseSoftTabsBridge15(
      org.teavm.jso.JSObject handle, boolean useSoftTabs);

  @org.teavm.jso.JSBody(
      params = {"handle", "tabSize"},
      script = "\n\t\t\n\t\thandle.getSession().setTabSize(tabSize);\n\t")
  private static native void setTabSizeBridge16(org.teavm.jso.JSObject handle, int tabSize);

  @org.teavm.jso.JSBody(
      params = {"handle", "line"},
      script = "\n\t\t\n\t\thandle.gotoLine(line);\n\t")
  private static native void gotoLineBridge17(org.teavm.jso.JSObject handle, int line);

  @org.teavm.jso.JSBody(
      params = {"handle", "hScrollBarAlwaysVisible"},
      script =
          "\n\t\t\n\t\thandle.renderer.setHScrollBarAlwaysVisible(hScrollBarAlwaysVisible);\n\t")
  private static native void setHScrollBarAlwaysVisibleBridge18(
      org.teavm.jso.JSObject handle, boolean hScrollBarAlwaysVisible);

  @org.teavm.jso.JSBody(
      params = {"handle", "showGutter"},
      script = "\n\t\t\n\t\thandle.renderer.setShowGutter(showGutter);\n\t")
  private static native void setShowGutterBridge19(
      org.teavm.jso.JSObject handle, boolean showGutter);

  @org.teavm.jso.JSBody(
      params = {"handle", "readOnly"},
      script = "\n\t\t\n\t\thandle.setReadOnly(readOnly);\n\t")
  private static native void setReadOnlyBridge20(org.teavm.jso.JSObject handle, boolean readOnly);

  @org.teavm.jso.JSBody(
      params = {"handle", "highlightSelectedWord"},
      script = "\n\t\t\n\t\thandle.setHighlightSelectedWord(highlightSelectedWord);\n\t")
  private static native void setHighlightSelectedWordBridge21(
      org.teavm.jso.JSObject handle, boolean highlightSelectedWord);

  @org.teavm.jso.JSBody(
      params = {"handle", "showPrintMargin"},
      script = "\n\t\t\n\t\thandle.renderer.setShowPrintMargin(showPrintMargin);\n\t")
  private static native void setShowPrintMarginBridge22(
      org.teavm.jso.JSObject handle, boolean showPrintMargin);

  @org.teavm.jso.JSBody(
      params = {"handle", "command"},
      script = "\n\t\t\n\t\thandle.commands.removeCommand(command);\n\t")
  private static native void removeCommandByNameBridge23(
      org.teavm.jso.JSObject handle, String command);

  @org.teavm.jso.JSBody(
      params = {"handle", "useWrapMode"},
      script = "\n\t\t\n\t\thandle.getSession().setUseWrapMode(useWrapMode);\n\t")
  private static native void setUseWrapModeBridge24(
      org.teavm.jso.JSObject handle, boolean useWrapMode);

  @org.teavm.jso.JSBody(
      params = {"handle", "b"},
      script =
          "\n\t\t// See: https://github.com/ajaxorg/ace/wiki/How-to-enable-Autocomplete-in-the-Ace-handle\n\t\t\n\t\tif (b) {\n\t\t\twindow.ace.require(\"ace/ext/language_tools\");\n\t\t\thandle.setOptions({ enableBasicAutocompletion: true });\n\t\t} else {\n\t\t\thandle.setOptions({ enableBasicAutocompletion: false });\n\t\t}\n\t")
  private static native void setAutocompleteEnabledBridge25(
      org.teavm.jso.JSObject handle, boolean b);

  @org.teavm.jso.JSBody(
      params = {},
      script =
          "\n\t\tvar langTools = window.ace.require(\"ace/ext/language_tools\");\n\t\tlangTools.setCompleters([]);\n    ")
  private static native void removeAllExistingCompletersBridge26();

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script = "\n\t\t\n\t\treturn handle.getSession().getSelection();\n\t")
  private static native org.teavm.jso.JSObject getSelectionJSBridge27(
      org.teavm.jso.JSObject handle);
}
