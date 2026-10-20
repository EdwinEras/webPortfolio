import { cn } from "@/lib/cn";

/** The availability badge — a live dot beside a short status line. `pulse`
 *  animates the dot; the footer's copy sits still. */
export function StatusPill({
  children,
  pulse = false,
  className,
}: {
  children: React.ReactNode;
  pulse?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full px-3.5 py-[7px] text-[13px] text-accent-200",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "block h-[7px] w-[7px] rounded-full bg-accent",
          pulse && "animate-pulse-dot",
        )}
      />
      {children}
    </span>
  );
}
