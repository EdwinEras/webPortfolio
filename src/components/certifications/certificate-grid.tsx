"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Certificate } from "@/lib/types";
import { CertificateCard } from "./certificate-card";
import { CertificateLightbox } from "./certificate-lightbox";

type Layout = "full" | "featured";

/**
 * `full` packs as many columns as fit — right for the certifications page,
 * where the count is whatever it is.
 *
 * `featured` fixes the column count instead. The home page shows exactly four
 * credentials, and an auto-fitting track lands on three-plus-an-orphan at
 * common widths; 2x2 or 1x4 always reads as a deliberate set.
 */
const LAYOUT_CLASS: Record<Layout, string> = {
  full: "grid-cols-[repeat(auto-fill,minmax(clamp(130px,28vw,230px),1fr))]",
  featured: "grid-cols-2 lg:grid-cols-4",
};

/** Owns which certificate is open, so the card and the lightbox stay decoupled. */
export function CertificateGrid({
  certificates,
  layout = "full",
}: {
  certificates: readonly Certificate[];
  layout?: Layout;
}) {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <>
      <div className={cn("grid gap-[clamp(10px,2vw,18px)]", LAYOUT_CLASS[layout])}>
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.image}
            certificate={certificate}
            onOpen={setActive}
          />
        ))}
      </div>

      <CertificateLightbox certificate={active} onClose={() => setActive(null)} />
    </>
  );
}
