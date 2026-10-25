package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Rules describing how editor runs this command (from keyboard, from command line or by {@link
 * AceEditor#execCommand(String)} API calls).
 */
public class AceCommandDescription {
  private final String name;
  private final ExecAction exec;
  private KeyBinding bindKey = null;
  private boolean readOnly = false;
  private boolean passEvent = false;
  private ScrollIntoView scrollIntoView = null;
  private MultiSelectAction multiSelectAction = null;
  private String aceCommandGroup = null;

  /**
   * Define Ace command with command line name and execution action
   *
   * @param name command line name
   * @param exec execution action
   */
  public AceCommandDescription(String name, ExecAction exec) {
    this.name = name;
    this.exec = exec;
  }

  /**
   * Give command line name.
   *
   * @return command line name
   */
  public String getName() {
    return name;
  }

  /**
   * Give execution action of this command.
   *
   * @return execution action
   */
  public ExecAction getExec() {
    return exec;
  }

  /**
   * Give key bindings.
   *
   * @return key bindings
   */
  public KeyBinding getBindKey() {
    return bindKey;
  }

  /**
   * Describe does this command change editor document or not.
   *
   * @return whether or not editor document could be changed
   */
  public boolean isReadOnly() {
    return readOnly;
  }

  /**
   * In case this parameter is true keyboard event will be passed to original listener.
   *
   * @return true in case event shouldn't be stopped after command execution
   */
  public boolean isPassEvent() {
    return passEvent;
  }

  /**
   * Give scroll settings for this command. In case it's null command is executed without scroll
   * adjustment. Otherwise see {@link ScrollIntoView} for details.
   *
   * @return scroll settings
   */
  public ScrollIntoView getScrollIntoView() {
    return scrollIntoView;
  }

  /**
   * Give multi-select action for this command. In case it's null command is executed once without
   * virtual changes in selection ranges. Otherwise see {@link MultiSelectAction} for details.
   *
   * @return multi-select action
   */
  public MultiSelectAction getMultiSelectAction() {
    return multiSelectAction;
  }

  /**
   * Give Ace command group name of this command.
   *
   * @return Ace command group name
   */
  public String getAceCommandGroup() {
    return aceCommandGroup;
  }

  /**
   * Chainable setter method for bindKey property.
   *
   * @param bindKey key binding (e.g. "shift-esc|ctrl-`" or "Command+Alt+C")
   * @return reference to this command description
   */
  public AceCommandDescription withBindKey(KeyBinding bindKey) {
    this.bindKey = bindKey;
    return this;
  }

  /**
   * Chainable setter method for bindKey property for all platforms.
   *
   * @param bindKeyForAllPlatforms key binding (e.g. "shift-esc|ctrl-`" or "Command+Alt+C")
   * @return reference to this command description
   */
  public AceCommandDescription withBindKey(String bindKeyForAllPlatforms) {
    this.bindKey = new KeyBinding(bindKeyForAllPlatforms);
    return this;
  }

  /**
   * Chainable setter method for bindKey property for Mac and other platforms separately.
   *
   * @param bindKeyForAllPlatformsExceptMac key binding for everything except Mac (e.g.
   *     "shift-esc|ctrl-`")
   * @param bindKeyForMac key binding for Mac (e.g. "shift-esc|ctrl-`" or "Command+Alt+C")
   * @return reference to this command description
   */
  public AceCommandDescription withBindKey(
      String bindKeyForAllPlatformsExceptMac, String bindKeyForMac) {
    this.bindKey = new KeyBinding(bindKeyForAllPlatformsExceptMac, bindKeyForMac);
    return this;
  }

  /**
   * Chainable setter method for readOnly property.
   *
   * @param readOnly describes does this command change editor document or not
   * @return reference to this command description
   */
  public AceCommandDescription withReadOnly(boolean readOnly) {
    this.readOnly = readOnly;
    return this;
  }

  /**
   * Chainable setter method for passEvent property.
   *
   * @param passEvent in case it's true keyboard event will not be stopped and will be passed to
   *     original listener after command execution
   * @return reference to this command description
   */
  public AceCommandDescription withPassEvent(boolean passEvent) {
    this.passEvent = passEvent;
    return this;
  }

  /**
   * Chainable setter method for scrollIntoView property.
   *
   * @param scrollIntoView scroll settings for this command (in case it's null command is executed
   *     without scroll adjustment; otherwise see {@link ScrollIntoView} for details)
   * @return reference to this command description
   */
  public AceCommandDescription withScrollIntoView(ScrollIntoView scrollIntoView) {
    this.scrollIntoView = scrollIntoView;
    return this;
  }

  /**
   * Chainable setter method for multiSelectAction property.
   *
   * @param multiSelectAction multi-select action for this command (in case it's null command is
   *     executed once without virtual changes in selection ranges; otherwise see {@link
   *     MultiSelectAction} for details)
   * @return reference to this command description
   */
  public AceCommandDescription withMultiSelectAction(MultiSelectAction multiSelectAction) {
    this.multiSelectAction = multiSelectAction;
    return this;
  }

  /**
   * Chainable setter method for aceCommandGroup property.
   *
   * @param aceCommandGroup Ace command group name of this command
   * @return reference to this command description
   */
  public AceCommandDescription withAceCommandGroup(String aceCommandGroup) {
    this.aceCommandGroup = aceCommandGroup;
    return this;
  }

  @Override
  public String toString() {
    return "AceCommandDescription [name="
        + name
        + ", exec="
        + exec
        + ", bindKey="
        + bindKey
        + ", readOnly="
        + readOnly
        + ", passEvent="
        + passEvent
        + ", scrollIntoView="
        + scrollIntoView
        + ", multiSelectAction="
        + multiSelectAction
        + ", aceCommandGroup="
        + aceCommandGroup
        + "]";
  }

  /**
   * Create Ace command from javascript object.
   *
   * @param obj javascript object describing Ace command
   * @return Ace command description object
   */
  public static AceCommandDescription fromJavaScript(JavaScriptObject obj) {
    if (obj == null) return null;
    org.teavm.jso.JSObject v = obj.unwrap();
    AceCommandDescription ret =
        new AceCommandDescription(
            AceNative.string(v, "name"),
            createJavaScriptWrapper(JavaScriptObject.of(AceNative.get(v, "exec"))));
    ret.bindKey = KeyBinding.fromJavaScript(JavaScriptObject.of(AceNative.get(v, "bindKey")));
    ret.readOnly = AceNative.bool(v, "readOnly");
    ret.passEvent = AceNative.bool(v, "passEvent");
    ret.scrollIntoView = ScrollIntoView.fromString(AceNative.string(v, "scrollIntoView"));
    ret.multiSelectAction = MultiSelectAction.fromString(AceNative.string(v, "multiSelectAction"));
    ret.aceCommandGroup = AceNative.string(v, "aceCommandGroup");
    return ret;
  }

  private static AceCommandDescription.ExecAction createJavaScriptWrapper(final Object jsFunction) {
    return new AceCommandDescription.ExecAction() {
      @Override
      public Object exec(AceEditor editor) {
        return invokeJavaScriptCommand(jsFunction, editor);
      }

      @Override
      public String toString() {
        return "ExecAction [javascript=" + jsFunction + "]";
      }
    };
  }

  private static Object invokeJavaScriptCommand(Object jsFunction, AceEditor javaWrapper) {
    return JavaScriptObject.of(invoke(AceNative.argument(jsFunction), javaWrapper.unwrapEditor()));
  }

  /**
   * Create javascript object from Ace command description.
   *
   * @param editor Ace editor java wrapper
   * @return Ace command javascript object
   */
  public JavaScriptObject toJavaScript(AceEditor editor) {
    return JavaScriptObject.of(
        make(
            name,
            () -> exec.exec(editor),
            bindKey == null ? null : AceNative.argument(bindKey.toJavaScript()),
            readOnly,
            passEvent,
            scrollIntoView == null ? null : scrollIntoView.name(),
            multiSelectAction == null ? null : multiSelectAction.name(),
            aceCommandGroup));
  }

  /** Key binding description. */
  public static class KeyBinding {
    private final String allPlatforms;
    private final String mac;
    private final String exceptMac;

    /**
     * Constructor for key bindings for all platforms.
     *
     * @param allPlatforms key bindings (e.g. "shift-esc|ctrl-`" or "Command+Alt+C")
     */
    public KeyBinding(String allPlatforms) {
      this.allPlatforms = allPlatforms;
      this.mac = null;
      this.exceptMac = null;
    }

    /**
     * Constructor for separate key bindings for Mac and other platforms.
     *
     * @param exceptMac key bindings for all other than Mac (e.g. "shift-esc|ctrl-`")
     * @param mac key bindings for Mac (e.g. "Command+Alt+C")
     */
    public KeyBinding(String exceptMac, String mac) {
      this.allPlatforms = null;
      this.mac = mac;
      this.exceptMac = exceptMac;
    }

    public String getAllPlatforms() {
      return allPlatforms;
    }

    public String getMac() {
      return mac;
    }

    public String getExceptMac() {
      return exceptMac;
    }

    @Override
    public String toString() {
      if (allPlatforms != null) return "KeyBinding [allPlatforms=" + allPlatforms + "]";
      return "KeyBinding [mac=" + mac + ", exceptMac=" + exceptMac + "]";
    }

    private static KeyBinding fromJavaScript(Object obj) {
      if (obj == null) return null;
      org.teavm.jso.JSObject v = AceNative.argument(obj);
      if (AceNative.isString(v)) return new KeyBinding(AceNative.text(v));
      return new KeyBinding(AceNative.string(v, "win"), AceNative.string(v, "mac"));
    }

    private Object toJavaScript() {
      if (allPlatforms != null) return allPlatforms;
      JavaScriptObject v = JavaScriptObject.createObject();
      AceNative.put(v.unwrap(), "win", exceptMac);
      AceNative.put(v.unwrap(), "mac", mac);
      return v;
    }
  }

  /** Ace command execution action. */
  public static interface ExecAction {
    public Object exec(AceEditor editor);
  }

  /** Ace command scrolling options. */
  public static enum ScrollIntoView {
    /** Scroll to cursor with animation */
    animate,
    /** Locate cursor in the center of the screen */
    center,
    /** Scroll to cursor without animation */
    cursor,
    /** Scroll to selected text */
    selectionPart;

    public static ScrollIntoView fromString(String value) {
      for (ScrollIntoView ret : ScrollIntoView.values()) {
        if (ret.name().equals(value)) return ret;
      }
      return null;
    }
  }

  /** Action defines a way of running commands based on editor text selection. */
  public static enum MultiSelectAction {
    /** Execute command for each selection in multi-select mode */
    forEach,
    /** Execute command for each selection grouped by lines in multi-select mode */
    forEachLine,
    /** Execute command once treating multi-selection as a single range */
    single;

    public static MultiSelectAction fromString(String value) {
      for (MultiSelectAction ret : MultiSelectAction.values()) {
        if (ret.name().equals(value)) return ret;
      }
      return null;
    }
  }

  @org.teavm.jso.JSBody(
      params = {"f", "e"},
      script = "var r=f(e); return r == null ? null : r;")
  private static native org.teavm.jso.JSObject invoke(
      org.teavm.jso.JSObject f, org.teavm.jso.JSObject e);

  @org.teavm.jso.JSBody(
      params = {"name", "exec", "key", "ro", "pass", "scroll", "multi", "group"},
      script =
          "var c={name:name,exec:exec,readOnly:ro,passEvent:pass}; if(key)c.bindKey=key;if(scroll)c.scrollIntoView=scroll;if(multi)c.multiSelectAction=multi;if(group)c.aceCommandGroup=group;return c;")
  private static native org.teavm.jso.JSObject make(
      String name,
      AceNative.Action exec,
      org.teavm.jso.JSObject key,
      boolean ro,
      boolean pass,
      String scroll,
      String multi,
      String group);
}
