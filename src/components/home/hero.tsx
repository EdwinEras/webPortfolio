import Image from "next/image";
import { profile } from "@/lib/content";
import { ActionLink, ResumeButton } from "@/components/ui/action-link";
import { Shell } from "@/components/ui/shell";
import { StatusPill } from "@/components/ui/status-pill";

/** Opening band: a radial glow anchored top-right, the name at display size,
 *  and the portrait haloed in the accent. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_78%_8%,var(--color-section-glow)_0%,var(--color-section)_34%,var(--color-bg)_76%)]">
      <Shell className="flex flex-wrap items-center gap-8 pb-[clamp(48px,7vw,90px)] pt-[clamp(56px,8vw,110px)] lg:gap-16">
        <div className="min-w-0 flex-[2_1_420px]">
          <StatusPill
            pulse
            className="mb-6 border border-section-ghost bg-[color-mix(in_srgb,var(--color-bg)_55%,transparent)]"
          >
            {profile.location} · {profile.availability}
          </StatusPill>

          <h1 className="mb-6 text-[clamp(44px,8.4vw,86px)] font-semibold leading-[0.96] tracking-[-0.035em]">
            {profile.name}
          </h1>

          <p className="mb-6 max-w-[22ch] text-[clamp(21px,3.2vw,34px)] font-medium leading-[1.16] tracking-[-0.02em] text-accent-300">
            {profile.headline}
          </p>

          <p className="mb-8 max-w-[48ch] text-[clamp(16px,1.5vw,18px)] leading-relaxed text-tone-200">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-3">
            <ResumeButton href={profile.resume} />
            <ActionLink href="/contact" variant="outline">
              Book a call →
            </ActionLink>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_280px] justify-center">
          <div className="relative w-full max-w-[360px]">
            <div
              aria-hidden
              className="absolute -inset-[18px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_42%,transparent)_0%,transparent_68%)] blur-[22px]"
            />
            {/* Intrinsic size matches the asset (416x416). Declaring anything
                larger makes Next request an upscale it will not produce. */}
            <Image
              src={profile.photo}
              alt={profile.name}
              width={416}
              height={416}
              sizes="(min-width: 640px) 360px, 80vw"
              priority
              className="relative aspect-square w-full rounded-full border border-accent-600 object-cover"
            />
          </div>
        </div>
      </Shell>
    </section>
  );
}
