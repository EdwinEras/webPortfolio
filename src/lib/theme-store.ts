import { DEFAULT_THEME, isTheme, THEME_STORAGE_KEY, type Theme } from "./theme";

/**
 * The theme's source of truth is the `data-theme` attribute on `<html>` — it
 * is written before React loads (see `THEME_INIT_SCRIPT`) and it is what the
 * CSS actually reads. This module exposes that attribute as an external store
 * so React can subscribe to it with `useSyncExternalStore`, rather than
 * mirroring it into component state and syncing the two in an effect.
 */

const listeners = new Set<() => void>();

export function subscribe(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

export function getSnapshot(): Theme {
  const applied = document.documentElement.dataset.theme;
  return isTheme(applied) ? applied : DEFAULT_THEME;
}

/** The server cannot know the visitor's choice, so it renders the default and
 *  the init script corrects the DOM before paint. */
export function getServerSnapshot(): Theme {
  return DEFAULT_THEME;
}

export function setTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Private browsing or blocked storage: the choice just won't persist.
  }
  listeners.forEach((listener) => listener());
}

export function toggleTheme(): void {
  setTheme(getSnapshot() === "dark" ? "light" : "dark");
}
