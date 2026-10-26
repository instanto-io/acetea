package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;
import java.util.ArrayList;
import java.util.List;

/** Represents GWT wrapper around an Ace Selection object */
public class AceSelection {
  private final JavaScriptObject selection;
  private final AceSelectionListener rootListener;
  private final List<AceSelectionListener> subListeners = new ArrayList<AceSelectionListener>();

  /**
   * Constructor for AceSelection
   *
   * @param selection Ace Selection java-script object (returned from
   *     editor.getSession().getSelection())
   */
  public AceSelection(JavaScriptObject selection) {
    this.selection = selection;
    this.rootListener =
        new AceSelectionListener() {
          @Override
          public void onChangeSelection(AceSelection ignore) {
            for (AceSelectionListener lst : new ArrayList<>(subListeners))
              lst.onChangeSelection(AceSelection.this);
          }
        };
    registerRootListener(selection, () -> rootListener.onChangeSelection(this));
  }

  @jsinterop.annotations.JsFunction
  private interface Changed {
    void changed();
  }

  private static native void registerRootListener(
      JavaScriptObject selection,
      Changed listener) /*-{ selection.on('changeSelection',listener); }-*/;

  /**
   * Register listener for selection change events.
   *
   * @param listener implementation of a listener for selection change events
   */
  public void addSelectionListener(AceSelectionListener listener) {
    subListeners.add(listener);
  }

  /**
   * Unregister listener for selection change events.
   *
   * @param listener implementation of a listener for selection change events
   */
  public void removeSelectionListener(AceSelectionListener listener) {
    subListeners.remove(listener);
  }

  /**
   * Check if selection is empty.
   *
   * @return true in case selection is empty
   */
  public boolean isEmpty() {
    return isEmptyBridge1(selection);
  }

  /**
   * Check if selection contains several lines.
   *
   * @return true in case selection contains several lines
   */
  public boolean isMultiLine() {
    return isMultiLineBridge2(selection);
  }

  private AceEditorCursorPosition getCursorPositionImpl(final double row, final double column) {
    return new AceEditorCursorPosition((int) row, (int) column);
  }

  /**
   * Give position of leading end of selection (where cursor is located).
   *
   * @return position of leading end of selection
   */
  public AceEditorCursorPosition getSelectionLead() {
    return AceNative.position(AceNative.callObject(selection, "getSelectionLead"));
  }

  /**
   * Give starting position of selection (opposite to position where cursor is located).
   *
   * @return starting position of selection
   */
  public AceEditorCursorPosition getSelectionAnchor() {
    return AceNative.position(AceNative.callObject(selection, "getSelectionAnchor"));
  }

  /**
   * Check if selection leading position is located before anchor position
   *
   * @return true in case selection leading position is located before anchor position
   */
  public boolean isBackwards() {
    return isBackwardsBridge3(selection);
  }

  /** Clear selection. */
  public void clearSelection() {
    clearSelectionBridge4(selection);
  }

  /** Select the whole text. */
  public void selectAll() {
    selectAllBridge5(selection);
  }

  /**
   * Select text fragment between two positions
   *
   * @param fromRow row of selection anchor
   * @param fromColumn columns of selection anchor
   * @param toRow row of selection leading position
   * @param toColumn column of selection leading position
   */
  public void select(int fromRow, int fromColumn, int toRow, int toColumn) {
    selectBridge6(selection, fromRow, fromColumn, toRow, toColumn);
  }

  /** Select line where cursor is located. */
  public void selectLine() {
    selectLineBridge7(selection);
  }

  private static native boolean isEmptyBridge1(JavaScriptObject handle) /*-{
		return handle.isEmpty();
	 }-*/;

  private static native boolean isMultiLineBridge2(JavaScriptObject handle) /*-{
		return handle.isMultiLine();
	 }-*/;

  private static native boolean isBackwardsBridge3(JavaScriptObject handle) /*-{
		return handle.isBackwards();
	 }-*/;

  private static native void clearSelectionBridge4(JavaScriptObject handle) /*-{
		handle.clearSelection();
	 }-*/;

  private static native void selectAllBridge5(JavaScriptObject handle) /*-{
		handle.selectAll();
	 }-*/;

  private static native void selectBridge6(
      JavaScriptObject handle, int fromRow, int fromColumn, int toRow, int toColumn) /*-{
		handle.setSelectionAnchor(fromRow, fromColumn);
		handle.selectTo(toRow, toColumn);
	 }-*/;

  private static native void selectLineBridge7(JavaScriptObject handle) /*-{
		var s = handle;
		var pos = s.getSelectionLead();
		var len = s.doc.getLine(pos.row).length;
		s.setSelectionAnchor(pos.row, 0);
		s.selectTo(pos.row, len);
	 }-*/;
}
