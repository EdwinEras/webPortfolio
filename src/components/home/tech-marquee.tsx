import Image from "next/image";
import { tech } from "@/lib/content";
import { Eyebrow } from "@/components/ui/section-heading";
import { Shell } from "@/components/ui/shell";

/** The list is rendered twice so the -50% keyframe lands exactly on the seam
 *  and the loop is invisible. The duplicate is hidden from assistive tech. */
export function TechMarquee() {
  return (
    <section className="overflow-hidden border-y border-divider py-[clamp(40px,6vw,68px)]">
      <Shell className="mb-8">
        <Eyebrow>Tech stack</Eyebrow>
      </Shell>

      <div className="flex w-max animate-marquee gap-11">
        {[false, true].map((isDuplicate) => (
          <ul
            key={String(isDuplicate)}
            aria-hidden={isDuplicate || undefined}
            className="flex gap-11"
          >
            {tech.map((item) => (
              <li
                key={item.name}
                className="flex min-w-[76px] flex-col items-center gap-2.5"
              >
                {/* A fixed 76x38 box with object-contain: the logos have wildly
                    different native aspect ratios, so letting each size itself
                    would make the rendered dimensions disagree with the ones
                    declared here — which is what Next warns about. Contain fits
                    each logo inside the box without distorting it, and the
                    uniform cell keeps the marquee's rhythm even. */}
                <Image
                  src={item.image}
                  alt={isDuplicate ? "" : item.name}
                  width={76}
                  height={38}
                  className="h-[38px] w-[76px] object-contain"
                />
                <span className="whitespace-nowrap text-xs text-tone-400">{item.name}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
