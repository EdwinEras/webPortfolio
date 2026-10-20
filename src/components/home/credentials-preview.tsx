import Link from "next/link";
import { certificateCount, featuredCertificates } from "@/lib/content";
import { CertificateGrid } from "@/components/certifications/certificate-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { Shell } from "@/components/ui/shell";

/** The newest few credentials, with a route through to the full set. */
export function CredentialsPreview() {
  return (
    <Shell className="py-[clamp(56px,8vw,100px)]">
      <SectionHeading
        title="Credentials"
        action={
          <Link
            href="/certifications"
            className="text-[15px] text-accent transition-opacity duration-200 hover:opacity-80"
          >
            All {certificateCount} certifications →
          </Link>
        }
      />
      <CertificateGrid certificates={featuredCertificates} layout="featured" />
    </Shell>
  );
}
