"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Certificate } from "@/lib/types";

/**
 * Full-size view of one certificate. Rendered into `document.body` so it
 * escapes the grid's stacking context, and closed by backdrop click or Escape.
 */
export function CertificateLightbox({
  certificate,
  onClose,
}: {
  certificate: Certificate | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!certificate) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    // Freeze the page behind the overlay.
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [certificate, onClose]);

  if (!certificate || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
      onClick={onClose}
      className="fixed inset-0 z-50 grid place-items-center bg-[color-mix(in_srgb,#0b0c14_82%,transparent)] p-4 backdrop-blur-sm"
    >
      <figure
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-[90vh] max-w-5xl flex-col gap-3 rounded-lg border border-tone-800 bg-surface p-3 shadow-lg"
      >
        <Image
          src={certificate.image}
          alt={certificate.title}
          width={1400}
          height={1000}
          className="max-h-[78vh] w-auto rounded-md object-contain"
        />
        <figcaption className="px-1 pb-1 text-sm text-tone-400">{certificate.title}</figcaption>
      </figure>
    </div>,
    document.body,
  );
}
