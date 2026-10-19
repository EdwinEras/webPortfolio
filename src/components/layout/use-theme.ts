"use client";

import { useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, subscribe, toggleTheme } from "@/lib/theme-store";
import type { Theme } from "@/lib/theme";

/** Reads the current theme and lets a component flip it. No provider needed —
 *  the store is the `<html data-theme>` attribute itself. */
export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { theme, toggleTheme };
}
