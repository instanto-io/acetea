package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;
import org.teavm.jso.*;

class AceAnnotation extends JavaScriptObject {
  protected AceAnnotation() {
    super(null);
  }

  private AceAnnotation(JSObject value) {
    super(value);
  }

  public static AceAnnotation create(int row, int column, String text, String type) {
    return new AceAnnotation(make(row, column, text, type));
  }

  @JSBody(
      params = {"row", "column", "text", "type"},
      script = "return {row:row,column:column,text:text,type:type};")
  private static native JSObject make(int row, int column, String text, String type);
}
