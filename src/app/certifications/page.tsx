import type { Metadata } from "next";
import { certificateCount, certificates } from "@/lib/content";
import { CertificateGrid } from "@/components/certifications/certificate-grid";
import { PageHeader } from "@/components/ui/section-heading";
import { Shell } from "@/components/ui/shell";

export const metadata: Metadata = {
  title: "Certifications",
  description: `${certificateCount} credentials in software engineering, databases and cybersecurity.`,
};

const NUMBER_WORDS = [
  "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
  "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
];

/** Reads as prose when the count is small; falls back to digits past the list. */
function spellCount(count: number): string {
  return NUMBER_WORDS[count] ?? String(count);
}

export default function CertificationsPage() {
  return (
    <main>
      <Shell className="py-[clamp(48px,7vw,88px)]">
        <PageHeader
          title="Certifications"
          lede={`${spellCount(certificateCount)} credentials, newest first.`}
        />
        <CertificateGrid certificates={certificates} />
      </Shell>
    </main>
  );
}
