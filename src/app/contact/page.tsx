import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactLinks } from "@/components/contact/contact-links";
import { PageHeader } from "@/components/ui/section-heading";
import { Shell } from "@/components/ui/shell";
import { contacts, profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} — ${profile.location}, available now.`,
};

/**
 * Location and availability are read from the profile rather than written out
 * again here, so "available now" cannot go stale on this page while the hero
 * and the footer say something else.
 */
const LEDE = `${profile.location} · ${profile.availability.toLowerCase()} · replies the same day.`;

export default function ContactPage() {
  return (
    <main>
      <Shell className="py-[clamp(48px,7vw,88px)]">
        <PageHeader title="Contact" lede={LEDE} />

        {/*
          Two columns that wrap rather than a grid with a breakpoint: the basis
          values decide when there is room for both, so the form drops below the
          links exactly when it would otherwise be too narrow to type in.
        */}
        <div className="flex flex-wrap items-start gap-9">
          <div className="min-w-0 flex-[1_1_260px]">
            <ContactLinks contacts={contacts} />
          </div>

          <div className="min-w-0 flex-[1_1_340px]">
            <ContactForm />
          </div>
        </div>
      </Shell>
    </main>
  );
}
