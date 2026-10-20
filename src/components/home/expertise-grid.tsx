import Image from "next/image";
import { expertise } from "@/lib/content";
import { ChipList } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Shell } from "@/components/ui/shell";

/** "Three things I'm hired for" — the numbered capability cards. */
export function ExpertiseGrid() {
  return (
    <Shell className="py-[clamp(56px,8vw,100px)]">
      <SectionHeading
        title="Three things I'm hired for"
        lede="Each backed by a postgraduate certificate and shipped work."
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5">
        {expertise.map((area, index) => (
          <Reveal key={area.title} delay={index * 0.04}>
            <article className="h-full min-w-0 overflow-hidden rounded-lg border border-tone-800 bg-surface shadow-md">
              <div className="h-[150px] overflow-hidden bg-tone-900">
                <Image
                  src={area.image}
                  alt=""
                  width={640}
                  height={300}
                  className="h-full w-full object-cover opacity-60"
                />
              </div>
              <div className="p-[26px]">
                <div className="eyebrow mb-3 text-accent-400">
                  {area.step} — {area.verb}
                </div>
                <h3 className="mb-3 text-[23px] font-medium tracking-[-0.02em]">{area.title}</h3>
                <p className="mb-[18px] text-[15px] leading-relaxed text-tone-300">
                  {area.description}
                </p>
                <ChipList items={area.tags} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}
