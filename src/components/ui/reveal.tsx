"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/** How long to wait before showing content regardless of the observer. */
const FAILSAFE_MS = 1800;

/**
 * Fades and lifts its children into place the first time they scroll into
 * view, using one timing curve across every section.
 *
 * The fail-safe matters more than the animation: an IntersectionObserver never
 * fires in contexts that expand the page to its full height and scroll it
 * externally (embedded previews, some print and screenshot pipelines), and
 * without a backstop every revealed section would stay at `opacity: 0`
 * permanently. Content must never be left hidden by a decorative effect, so a
 * timer reveals everything after `FAILSAFE_MS` no matter what the observer did.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  /** Seconds. Stagger siblings with small increments (0.04 per item). */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [failsafeElapsed, setFailsafeElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFailsafeElapsed(true), FAILSAFE_MS);
    return () => clearTimeout(timer);
  }, []);

  // Visitors who ask for reduced motion get the content immediately.
  const visible = inView || failsafeElapsed || prefersReducedMotion;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
