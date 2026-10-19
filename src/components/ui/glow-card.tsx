import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * The card treatment shared by certificates and projects: a 1.5px gutter that
 * reads as a border, with a conic highlight that traces it on hover.
 *
 * The highlight is a sibling element clipped by the wrapper's `overflow-hidden`
 * and driven purely by `.group:hover` in CSS, so it costs no JavaScript and
 * works inside a Server Component.
 */
export function GlowCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  return (
    <Tag
      className={cn(
        "group relative flex overflow-hidden rounded-lg bg-tone-800 p-[1.5px] shadow-sm",
        "transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-accent)_55%,transparent),0_18px_44px_-18px_color-mix(in_srgb,var(--color-accent)_85%,transparent)]",
        className,
      )}
    >
      <span aria-hidden className="snake-ring" />
      <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-[calc(var(--radius-lg)-2px)] bg-surface">
        {children}
      </div>
    </Tag>
  );
}
