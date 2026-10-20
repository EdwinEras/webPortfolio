import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

/** The large section title used down the home page, with an optional lede and
 *  a slot for a trailing link or controls. */
export function SectionHeading({
  title,
  lede,
  action,
  className,
}: {
  title: string;
  lede?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <Reveal>
          <h2 className="text-[clamp(30px,4.4vw,46px)] font-semibold tracking-[-0.03em]">
            {title}
          </h2>
        </Reveal>
        {action}
      </div>
      {lede ? (
        <p className="mt-3.5 max-w-[52ch] text-[17px] text-tone-400">{lede}</p>
      ) : null}
    </div>
  );
}

/** The small uppercase label that titles a quieter band (e.g. "Tech stack"). */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("eyebrow text-[13px] text-tone-500", className)}>{children}</h2>
  );
}

/** Page title block for the secondary routes. */
export function PageHeader({ title, lede }: { title: string; lede?: string }) {
  return (
    <header className="mb-11">
      <h1 className="text-[clamp(34px,5.4vw,58px)] font-semibold tracking-[-0.035em]">
        {title}
      </h1>
      {lede ? (
        <p className="mt-3 max-w-[52ch] text-[17px] text-tone-400">{lede}</p>
      ) : null}
    </header>
  );
}
