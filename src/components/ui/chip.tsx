import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ChipVariant = "accent" | "outline";

/** Written out in full rather than interpolated — see the note in
 *  `action-link.tsx` on Tailwind's class detection. */
const CHIP_CLASS: Record<ChipVariant, string> = {
  accent: "chip-accent",
  outline: "chip-outline",
};

/** Small inline label. `accent` fills, `outline` draws a hairline — the two
 *  weights the design uses to separate headline stacks from supporting ones. */
export function Chip({
  children,
  variant = "accent",
  className,
}: {
  children: ReactNode;
  variant?: ChipVariant;
  className?: string;
}) {
  return <span className={cn("chip", CHIP_CLASS[variant], className)}>{children}</span>;
}

/** Renders a list of labels as chips. */
export function ChipList({
  items,
  variant = "accent",
  className,
}: {
  items: readonly string[];
  variant?: ChipVariant;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <Chip key={item} variant={variant}>
          {item}
        </Chip>
      ))}
    </div>
  );
}
