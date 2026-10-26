package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;
import jsinterop.annotations.JsFunction;

final class AceNative {
  private AceNative() {}

  static native JavaScriptObject callObject(JavaScriptObject o, String k) /*-{ return o[k](); }-*/;

  static native String string(
      JavaScriptObject o, String k) /*-{ return o[k] == null ? null : String(o[k]); }-*/;

  static native boolean bool(JavaScriptObject o, String k) /*-{ return !!o[k]; }-*/;

  static native JavaScriptObject get(
      JavaScriptObject o, String k) /*-{ return o[k] == null ? null : o[k]; }-*/;

  static native int integer(JavaScriptObject o, String k) /*-{ return o[k]|0; }-*/;

  static native void put(JavaScriptObject o, String k, String v) /*-{ o[k]=v; }-*/;

  static native JavaScriptObject value(String v) /*-{ return v; }-*/;

  static native boolean isString(JavaScriptObject v) /*-{ return typeof v === 'string'; }-*/;

  static native String text(JavaScriptObject v) /*-{ return String(v); }-*/;

  static native JavaScriptObject array() /*-{ return []; }-*/;

  static native void push(JavaScriptObject a, JavaScriptObject v) /*-{ a.push(v); }-*/;

  static AceEditorCursorPosition position(JavaScriptObject p) {
    return new AceEditorCursorPosition(integer(p, "row"), integer(p, "column"));
  }

  static JavaScriptObject argument(Object value) {
    if (value == null) return null;
    if (value instanceof String) return value((String) value);
    if (value instanceof JavaScriptObject) return ((JavaScriptObject) value);
    throw new IllegalArgumentException("Ace arguments must be strings or JavaScriptObject handles");
  }

  @JsFunction
  interface Action {
    void run();
  }

  @JsFunction
  interface Event {
    void fire(JavaScriptObject event);
  }

  @JsFunction
  interface Completion {
    void complete(int id, int row, int column, String prefix, JavaScriptObject callback);
  }
}
