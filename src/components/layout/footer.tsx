import Link from "next/link";
import { profile } from "@/lib/content";
import { NAV_LINKS, RESUME_HREF, SOCIAL_LINKS } from "@/lib/site";
import { Shell } from "@/components/ui/shell";
import { StatusPill } from "@/components/ui/status-pill";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0 flex-[0_1_160px]">
      <h2 className="eyebrow mb-3.5 text-tone-600">{title}</h2>
      <div className="flex flex-col gap-2.5 text-[15px]">{children}</div>
    </div>
  );
}

const footerLinkClass = "text-tone-300 transition-colors duration-200 hover:text-accent";

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-canvas">
      <Shell className="flex flex-wrap justify-between gap-10 pb-8 pt-[clamp(40px,6vw,64px)]">
        <div className="min-w-0 flex-[1_1_260px]">
          <div className="mb-3 text-[22px] font-semibold tracking-[-0.02em]">{profile.name}</div>
          <p className="mb-[18px] max-w-[34ch] text-[15px] leading-relaxed text-tone-400">
            {profile.bio}
          </p>
          <StatusPill className="border border-accent-700 bg-accent-900">Open to offers</StatusPill>
        </div>

        <FooterColumn title="Pages">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={footerLinkClass}>
              {link.name}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Elsewhere">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className={footerLinkClass}
            >
              {link.name}
            </a>
          ))}
          <a href={RESUME_HREF} download className={footerLinkClass}>
            Résumé (PDF)
          </a>
        </FooterColumn>
      </Shell>

      <Shell className="pb-9">
        <div className="rule-fade mb-[22px]" />
        <p className="text-[13px] text-tone-600">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </Shell>
    </footer>
  );
}
