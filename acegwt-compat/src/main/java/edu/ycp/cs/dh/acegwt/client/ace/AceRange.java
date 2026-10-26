package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;

/** A native Ace range with zero-based positions and an exclusive end. */
public final class AceRange extends JavaScriptObject {
  protected AceRange() {}

  public final AceEditorCursorPosition getStart() {
    return new AceEditorCursorPosition(
        coordinate(this, "start", "row"), coordinate(this, "start", "column"));
  }

  public final AceEditorCursorPosition getEnd() {
    return new AceEditorCursorPosition(
        coordinate(this, "end", "row"), coordinate(this, "end", "column"));
  }

  private static native int coordinate(AceRange range, String end, String coordinate) /*-{
    return range[end][coordinate];
  }-*/;

  public static native AceRange create(int a, int b, int c, int d) /*-{
    var R = $wnd.ace.require('ace/range').Range;
    return new R(a, b, c, d);
  }-*/;

  static JavaScriptObject toJsObject(int a, int b, int c, int d) {
    return create(a, b, c, d);
  }

  public final void detach() {
    detachStart();
    detachEnd();
  }

  public final void detachStart() {
    detach(this, "start");
  }

  public final void detachEnd() {
    detach(this, "end");
  }

  private static native void detach(AceRange r, String end) /*-{
    if (r[end] && typeof r[end].detach === 'function') r[end].detach();
  }-*/;
}
