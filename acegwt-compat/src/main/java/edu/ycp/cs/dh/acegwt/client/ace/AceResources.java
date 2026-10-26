package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.Callback;
import com.google.gwt.core.client.ScriptInjector;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

/** Loads the pinned AceTea WebJar, sharing requests across editor instances. */
public final class AceResources {
  public static final String VERSION = "1.45.2";
  private static String basePath = "webjars/ace/" + VERSION + "/";
  private static Load core;
  private static final Map<String, Load> modules = new HashMap<>();

  private AceResources() {}

  /** Set the served distribution URL before the first load. */
  public static void setBasePath(String path) {
    if (core != null) throw new IllegalStateException("Ace loading has already started");
    if (path == null || path.isEmpty()) throw new IllegalArgumentException("Empty Ace asset path");
    basePath = path.endsWith("/") ? path : path + "/";
  }

  /** Load core plus completion, snippet and search UI extensions from the bundled WebJar. */
  public static void whenReady(Runnable ready, Consumer<Throwable> failed) {
    whenReady(new String[] {"ext-language_tools", "ext-searchbox"}, ready, failed);
  }

  /**
   * Load core and optional modules (for example mode-java, snippets/java or ext-language_tools).
   */
  public static void whenReady(String[] requested, Runnable ready, Consumer<Throwable> failed) {
    String[] names = java.util.Arrays.copyOf(requested, requested.length);
    for (String name : names) {
      if (!name.matches("((mode|theme|ext)-[A-Za-z0-9_]+|snippets/[A-Za-z0-9_]+)"))
        throw new IllegalArgumentException("Invalid Ace module: " + name);
    }
    if (core == null) core = new Load(basePath + "ace.js", isLoaded());
    core.whenReady(
        () -> {
          configure(basePath);
          loadModules(names, 0, ready, failed);
        },
        failed);
  }

  private static void loadModules(
      String[] names, int i, Runnable ready, Consumer<Throwable> failed) {
    if (i == names.length) {
      ready.run();
      return;
    }
    Load module =
        modules.computeIfAbsent(names[i], name -> new Load(basePath + name + ".js", false));
    module.whenReady(() -> loadModules(names, i + 1, ready, failed), failed);
  }

  private static native boolean isLoaded() /*-{ return !!($wnd.ace && $wnd.ace.edit); }-*/;

  private static native void configure(String path) /*-{
    $wnd.ace.config.set('basePath', path);
    $wnd.ace.config.set('modePath', path);
    $wnd.ace.config.set('themePath', path);
    $wnd.ace.config.set('workerPath', path);
  }-*/;

  private static final class Load {
    private final String url;
    private final List<Runnable> ready = new ArrayList<>();
    private final List<Consumer<Throwable>> failed = new ArrayList<>();
    private boolean started;
    private boolean loaded;
    private Exception failure;

    Load(String url, boolean loaded) {
      this.url = url;
      this.loaded = loaded;
    }

    void whenReady(Runnable success, Consumer<Throwable> error) {
      if (loaded) {
        success.run();
        return;
      }
      if (failure != null) {
        error.accept(failure);
        return;
      }
      ready.add(success);
      failed.add(error);
      if (started) return;
      started = true;
      ScriptInjector.fromUrl(url)
          .setWindow(ScriptInjector.TOP_WINDOW)
          .setCallback(
              new Callback<Void, Exception>() {
                @Override
                public void onSuccess(Void value) {
                  loaded = true;
                  List<Runnable> callbacks = new ArrayList<>(ready);
                  ready.clear();
                  failed.clear();
                  for (Runnable callback : callbacks) callback.run();
                }

                @Override
                public void onFailure(Exception error) {
                  failure = error;
                  List<Consumer<Throwable>> callbacks = new ArrayList<>(failed);
                  ready.clear();
                  failed.clear();
                  for (Consumer<Throwable> callback : callbacks) callback.accept(error);
                }
              })
          .inject();
    }
  }
}
