import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** The page's horizontal container. Every full-width band centres its contents
 *  with this so the left edge of text lines up from section to section. */
export function Shell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-shell px-4 sm:px-6 lg:px-7", className)}>
      {children}
    </div>
  );
}
