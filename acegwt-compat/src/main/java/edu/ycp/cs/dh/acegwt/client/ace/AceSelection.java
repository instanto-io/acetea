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
    registerRootListener(selection.unwrap(), () -> rootListener.onChangeSelection(this));
  }

  @org.teavm.jso.JSFunctor
  private interface Changed extends org.teavm.jso.JSObject {
    void changed();
  }

  @org.teavm.jso.JSBody(
      params = {"selection", "listener"},
      script = "selection.on('changeSelection',listener);")
  private static native void registerRootListener(
      org.teavm.jso.JSObject selection, Changed listener);

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
    return isEmptyBridge1(selection.unwrap());
  }

  /**
   * Check if selection contains several lines.
   *
   * @return true in case selection contains several lines
   */
  public boolean isMultiLine() {
    return isMultiLineBridge2(selection.unwrap());
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
    return AceNative.position(AceNative.callObject(selection.unwrap(), "getSelectionLead"));
  }

  /**
   * Give starting position of selection (opposite to position where cursor is located).
   *
   * @return starting position of selection
   */
  public AceEditorCursorPosition getSelectionAnchor() {
    return AceNative.position(AceNative.callObject(selection.unwrap(), "getSelectionAnchor"));
  }

  /**
   * Check if selection leading position is located before anchor position
   *
   * @return true in case selection leading position is located before anchor position
   */
  public boolean isBackwards() {
    return isBackwardsBridge3(selection.unwrap());
  }

  /** Clear selection. */
  public void clearSelection() {
    clearSelectionBridge4(selection.unwrap());
  }

  /** Select the whole text. */
  public void selectAll() {
    selectAllBridge5(selection.unwrap());
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
    selectBridge6(selection.unwrap(), fromRow, fromColumn, toRow, toColumn);
  }

  /** Select line where cursor is located. */
  public void selectLine() {
    selectLineBridge7(selection.unwrap());
  }

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script = "\n\t\treturn handle.isEmpty();\n\t")
  private static native boolean isEmptyBridge1(org.teavm.jso.JSObject handle);

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script = "\n\t\treturn handle.isMultiLine();\n\t")
  private static native boolean isMultiLineBridge2(org.teavm.jso.JSObject handle);

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script = "\n\t\treturn handle.isBackwards();\n\t")
  private static native boolean isBackwardsBridge3(org.teavm.jso.JSObject handle);

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script = "\n\t\thandle.clearSelection();\n\t")
  private static native void clearSelectionBridge4(org.teavm.jso.JSObject handle);

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script = "\n\t\thandle.selectAll();\n\t")
  private static native void selectAllBridge5(org.teavm.jso.JSObject handle);

  @org.teavm.jso.JSBody(
      params = {"handle", "fromRow", "fromColumn", "toRow", "toColumn"},
      script =
          "\n\t\thandle.setSelectionAnchor(fromRow, fromColumn);\n\t\thandle.selectTo(toRow, toColumn);\n\t")
  private static native void selectBridge6(
      org.teavm.jso.JSObject handle, int fromRow, int fromColumn, int toRow, int toColumn);

  @org.teavm.jso.JSBody(
      params = {"handle"},
      script =
          "\n\t\tvar s = handle;\n\t\tvar pos = s.getSelectionLead();\n\t\tvar len = s.doc.getLine(pos.row).length;\n\t\ts.setSelectionAnchor(pos.row, 0);\n\t\ts.selectTo(pos.row, len);\n\t")
  private static native void selectLineBridge7(org.teavm.jso.JSObject handle);
}
