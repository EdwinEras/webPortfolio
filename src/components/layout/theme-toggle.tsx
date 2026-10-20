"use client";

import { cn } from "@/lib/cn";
import { useTheme } from "./use-theme";

/** Switches the token set. The label always names the destination, not the
 *  current state, so screen-reader users hear what the button will do. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={label}
      aria-label={label}
      className={cn(
        "flex items-center justify-center rounded-md border border-tone-800 text-tone-300",
        "transition-colors duration-200 hover:border-accent hover:text-accent",
        className,
      )}
    >
      <span aria-hidden className="text-[15px] leading-none">
        {theme === "light" ? "☾" : "☀"}
      </span>
    </button>
  );
}
