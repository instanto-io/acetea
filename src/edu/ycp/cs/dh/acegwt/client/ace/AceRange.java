package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;
import org.teavm.jso.*;

public final class AceRange extends JavaScriptObject {
  protected AceRange() {
    super(null);
  }

  private AceRange(JSObject value) {
    super(value);
  }

  public static AceRange create(int a, int b, int c, int d) {
    return new AceRange(make(a, b, c, d));
  }

  static JavaScriptObject toJsObject(int a, int b, int c, int d) {
    return create(a, b, c, d);
  }

  @JSBody(
      params = {"a", "b", "c", "d"},
      script = "var R=ace.require('ace/range').Range; return new R(a,b,c,d);")
  private static native JSObject make(int a, int b, int c, int d);

  public void detach() {
    detachStart();
    detachEnd();
  }

  public void detachStart() {
    detach(unwrap(), "start");
  }

  public void detachEnd() {
    detach(unwrap(), "end");
  }

  @JSBody(
      params = {"r", "end"},
      script = "if(r[end] && typeof r[end].detach === 'function') r[end].detach();")
  private static native void detach(JSObject r, String end);
}
