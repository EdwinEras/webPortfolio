import { profile } from "@/lib/content";
import { ActionLink, ResumeButton } from "@/components/ui/action-link";
import { Reveal } from "@/components/ui/reveal";

/** Closing call to action — the same glow as the hero, mirrored to the top edge. */
export function CtaBand() {
  return (
    <section className="border-t border-section-ghost bg-[radial-gradient(90%_140%_at_50%_0%,var(--color-section-glow)_0%,var(--color-section)_42%,var(--color-bg)_100%)]">
      <div className="mx-auto max-w-[900px] px-4 py-[clamp(60px,9vw,112px)] text-center sm:px-6 lg:px-7">
        <Reveal>
          <h2 className="mb-5 text-[clamp(32px,5.6vw,58px)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Let&apos;s talk this week
          </h2>
        </Reveal>
        <p className="mx-auto mb-8 max-w-[42ch] text-[clamp(16px,1.6vw,19px)] text-accent-200">
          {profile.location}. {profile.availability}. Résumé is one click away and I reply the
          same day.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <ResumeButton href={profile.resume}>Download résumé</ResumeButton>
          <ActionLink href="/contact" variant="outline">
            Send a message
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
