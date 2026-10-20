import { stats } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Shell } from "@/components/ui/shell";

/** The saturated indigo band of headline numbers directly under the hero. */
export function StatsBand() {
  return (
    <section className="border-y border-section-ghost bg-section">
      <Shell className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-7 py-[clamp(32px,4vw,52px)]">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.04}>
            <div className="text-[clamp(34px,4.6vw,52px)] font-semibold leading-none tracking-[-0.03em] text-tone-100">
              {stat.value}
            </div>
            <div className="mt-2.5 text-sm text-accent-200">{stat.label}</div>
          </Reveal>
        ))}
      </Shell>
    </section>
  );
}
