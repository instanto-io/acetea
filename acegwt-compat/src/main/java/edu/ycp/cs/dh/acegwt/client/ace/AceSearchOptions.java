package edu.ycp.cs.dh.acegwt.client.ace;

import org.teavm.jso.JSBody;
import org.teavm.jso.JSObject;

/** Search settings. Defaults: literal, case-insensitive, forward, wrapping, skip current match. */
public final class AceSearchOptions {
  private boolean caseSensitive, wholeWord, regExp, backwards;
  private boolean wrap = true, skipCurrent = true;

  public AceSearchOptions withCaseSensitive(boolean value) {
    caseSensitive = value;
    return this;
  }

  public AceSearchOptions withWholeWord(boolean value) {
    wholeWord = value;
    return this;
  }

  /** Patterns and replacement groups use JavaScript regular-expression syntax. */
  public AceSearchOptions withRegExp(boolean value) {
    regExp = value;
    return this;
  }

  public AceSearchOptions withBackwards(boolean value) {
    backwards = value;
    return this;
  }

  public AceSearchOptions withWrap(boolean value) {
    wrap = value;
    return this;
  }

  public AceSearchOptions withSkipCurrent(boolean value) {
    skipCurrent = value;
    return this;
  }

  JSObject toNative(String needle) {
    return create(needle, caseSensitive, wholeWord, regExp, backwards, wrap, skipCurrent);
  }

  @JSBody(
      params = {
        "needle",
        "caseSensitive",
        "wholeWord",
        "regExp",
        "backwards",
        "wrap",
        "skipCurrent"
      },
      script =
          "return {needle:needle, caseSensitive:caseSensitive, wholeWord:wholeWord, regExp:regExp, backwards:backwards, wrap:wrap, skipCurrent:skipCurrent, range:null, start:null, preventScroll:false, preserveCase:false};")
  private static native JSObject create(
      String needle,
      boolean caseSensitive,
      boolean wholeWord,
      boolean regExp,
      boolean backwards,
      boolean wrap,
      boolean skipCurrent);
}
