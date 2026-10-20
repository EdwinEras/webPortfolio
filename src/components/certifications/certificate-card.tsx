"use client";

import Image from "next/image";
import { formatCertificateDate } from "@/lib/content";
import type { Certificate } from "@/lib/types";
import { GlowCard } from "@/components/ui/glow-card";

/**
 * A single credential. Clicking opens the full-size scan — the certificates
 * are unreadable at grid size, so the lightbox is the point of the page, not
 * decoration.
 */
export function CertificateCard({
  certificate,
  onOpen,
}: {
  certificate: Certificate;
  onOpen: (certificate: Certificate) => void;
}) {
  return (
    <GlowCard>
      <button
        type="button"
        onClick={() => onOpen(certificate)}
        className="flex h-full flex-col text-left"
        aria-label={`View ${certificate.title} certificate`}
      >
        <div className="aspect-[4/3] w-full overflow-hidden bg-tone-900">
          <Image
            src={certificate.image}
            alt=""
            width={460}
            height={345}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-[clamp(11px,2vw,18px)]">
          <h3 className="text-[clamp(13px,1.4vw,15px)] font-medium leading-snug">
            {certificate.title}
          </h3>
          <p className="mt-1.5 text-xs text-tone-500">
            {formatCertificateDate(certificate.date)}
          </p>
        </div>
      </button>
    </GlowCard>
  );
}
