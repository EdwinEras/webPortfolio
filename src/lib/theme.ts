export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "ee-portfolio-theme";

/** Dark is the design's home ground; light is the alternate. Server-rendered
 *  markup always assumes this value, and the init script corrects it before
 *  the first paint. */
export const DEFAULT_THEME: Theme = "dark";

export function isTheme(value: unknown): value is Theme {
  return value === "dark" || value === "light";
}

/**
 * Applied to `<html data-theme>` by a blocking script in `<head>` so the
 * stored choice is in place before the first paint — otherwise a light-theme
 * visitor sees a flash of the dark ground on every navigation.
 *
 * Kept as a string (rather than a module) because it has to run inline, ahead
 * of the React bundle. It reads the same storage key the provider writes.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});var t=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme=${JSON.stringify(
  DEFAULT_THEME,
)};}})();`;
