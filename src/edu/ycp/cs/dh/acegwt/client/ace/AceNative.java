package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;
import org.teavm.jso.*;

final class AceNative {
  private AceNative() {}

  @JSBody(
      params = {"o", "k"},
      script = "return o[k]();")
  static native JSObject callObject(JSObject o, String k);

  @JSBody(
      params = {"o", "k"},
      script = "return o[k] == null ? null : String(o[k]);")
  static native String string(JSObject o, String k);

  @JSBody(
      params = {"o", "k"},
      script = "return !!o[k];")
  static native boolean bool(JSObject o, String k);

  @JSBody(
      params = {"o", "k"},
      script = "return o[k] == null ? null : o[k];")
  static native JSObject get(JSObject o, String k);

  @JSBody(
      params = {"o", "k"},
      script = "return o[k]|0;")
  static native int integer(JSObject o, String k);

  @JSBody(
      params = {"o", "k", "v"},
      script = "o[k]=v;")
  static native void put(JSObject o, String k, String v);

  @JSBody(params = "v", script = "return v;")
  static native JSObject value(String v);

  @JSBody(params = "v", script = "return typeof v === 'string';")
  static native boolean isString(JSObject v);

  @JSBody(params = "v", script = "return String(v);")
  static native String text(JSObject v);

  @JSBody(script = "return [];")
  static native JSObject array();

  @JSBody(
      params = {"a", "v"},
      script = "a.push(v);")
  static native void push(JSObject a, JSObject v);

  static AceEditorCursorPosition position(JSObject p) {
    return new AceEditorCursorPosition(integer(p, "row"), integer(p, "column"));
  }

  static JSObject argument(Object value) {
    if (value == null) return null;
    if (value instanceof String) return value((String) value);
    if (value instanceof JavaScriptObject) return ((JavaScriptObject) value).unwrap();
    throw new IllegalArgumentException("Ace arguments must be strings or JavaScriptObject handles");
  }

  @JSFunctor
  interface Action extends JSObject {
    void run();
  }

  @JSFunctor
  interface Event extends JSObject {
    void fire(JSObject event);
  }

  @JSFunctor
  interface Completion extends JSObject {
    void complete(int id, int row, int column, String prefix, JSObject callback);
  }
}
