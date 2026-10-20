import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "accent" | "outline";
type Size = "sm" | "md";

/**
 * Class names are looked up, never built by interpolation.
 *
 * Tailwind discovers classes by scanning source text, and it tree-shakes
 * `@layer components` rules it cannot find a use for. A template literal like
 * `action-${variant}` is invisible to that scan, so the rule would be stripped
 * from the build and the button would render unstyled. Writing each class out
 * in full keeps it detectable — and greppable.
 */
const VARIANT_CLASS: Record<Variant, string> = {
  accent: "action-accent",
  outline: "action-outline",
};

const SIZE_CLASS: Record<Size, string> = {
  sm: "action-sm",
  md: "action-md",
};

interface ActionStyle {
  /** `accent` carries the glow and marks the primary action in a view. */
  variant?: Variant;
  size?: Size;
  className?: string;
}

function actionClass({ variant = "accent", size = "md", className }: ActionStyle): string {
  return cn("action", SIZE_CLASS[size], VARIANT_CLASS[variant], className);
}

type AnchorProps = ActionStyle & Omit<ComponentPropsWithoutRef<"a">, "className">;
type LinkProps = ActionStyle & Omit<ComponentPropsWithoutRef<typeof Link>, "className">;

/** An internal route styled as a button. */
export function ActionLink({ variant, size, className, children, ...rest }: LinkProps) {
  return (
    <Link className={actionClass({ variant, size, className })} {...rest}>
      {children}
    </Link>
  );
}

/** An external URL or file download styled as a button. A plain anchor, so
 *  `download` and cross-origin targets behave normally. */
export function ActionAnchor({ variant, size, className, children, ...rest }: AnchorProps) {
  return (
    <a className={actionClass({ variant, size, className })} {...rest}>
      {children}
    </a>
  );
}

/** The résumé download — it appears in the header, hero, CTA band and footer,
 *  so the `download` attribute and default label live in one place. */
export function ResumeButton({
  href,
  children = "Download résumé (PDF)",
  ...style
}: ActionStyle & { href: string; children?: ReactNode }) {
  return (
    <ActionAnchor href={href} download {...style}>
      {children}
    </ActionAnchor>
  );
}
