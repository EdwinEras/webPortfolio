"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { experience } from "@/lib/content";
import { ChipList } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Shell } from "@/components/ui/shell";

/**
 * Work history. One set of markup serves both layouts the design calls for:
 * a stacked two-column list from `lg` up, and a snap-scrolling carousel below
 * it. Using native scroll-snap rather than a transform keeps touch swiping,
 * keyboard scrolling and screen-reader order working for free — the arrows and
 * dots only drive `scrollTo`, and the section reads correctly if JS never runs.
 */
export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  /** Mirrors `activeIndex`, but updated synchronously on click. Scroll events
   *  land a frame or more later, so stepping from state alone makes two quick
   *  taps on "next" advance only one slide. */
  const indexRef = useRef(0);

  /** Measures against the slides themselves rather than assuming a slide is
   *  exactly one viewport wide — the track has a gap, so index x width drifts
   *  further out of step with every slide. */
  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    // Wrap around, matching the design's looping arrows.
    const target = (index + experience.length) % experience.length;
    const slide = track.children[target] as HTMLElement | undefined;
    if (!slide) return;
    indexRef.current = target;
    const delta = slide.getBoundingClientRect().left - track.getBoundingClientRect().left;
    track.scrollTo({ left: track.scrollLeft + delta, behavior: "smooth" });
  }, []);

  /** The active slide is whichever one's centre sits closest to the track's. */
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const trackBox = track.getBoundingClientRect();
    const trackCentre = trackBox.left + trackBox.width / 2;

    let nearest = 0;
    let shortestDistance = Number.POSITIVE_INFINITY;
    Array.from(track.children).forEach((slide, index) => {
      const box = slide.getBoundingClientRect();
      const distance = Math.abs(box.left + box.width / 2 - trackCentre);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearest = index;
      }
    });
    indexRef.current = nearest;
    setActiveIndex(nearest);
  }, []);

  const step = useCallback(
    (delta: number) => scrollToIndex(indexRef.current + delta),
    [scrollToIndex],
  );

  return (
    <Shell className="pb-[clamp(56px,8vw,100px)]">
      <SectionHeading
        title="Where I've worked"
        action={
          <div className="flex flex-none items-center gap-2 lg:hidden">
            <CarouselButton label="Previous role" onClick={() => step(-1)}>
              ‹
            </CarouselButton>
            <CarouselButton label="Next role" onClick={() => step(1)}>
              ›
            </CarouselButton>
          </div>
        }
      />

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className={cn(
          "flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "lg:flex-col lg:gap-[18px] lg:overflow-visible",
        )}
      >
        {experience.map((job, index) => (
          <Reveal
            key={job.company}
            delay={index * 0.04}
            className="min-w-full snap-center lg:min-w-0"
          >
            <article className="flex h-full flex-wrap gap-[26px] rounded-lg border border-tone-800 bg-surface p-[clamp(20px,3vw,34px)]">
              <div className="min-w-0 flex-[1_1_200px]">
                <h3 className="mb-2 text-[clamp(19px,4.6vw,22px)] font-medium tracking-[-0.02em]">
                  {job.role}
                </h3>
                <p className="text-[15px] font-medium text-accent-300">{job.company}</p>
                <p className="mt-1.5 text-[13px] text-tone-500">{job.duration}</p>
                <ChipList items={job.technologies} variant="outline" className="mt-4" />
              </div>

              <ul className="flex min-w-0 flex-[2_1_340px] list-disc flex-col gap-2.5 pl-[18px]">
                {job.description.map((line) => (
                  <li key={line} className="text-[15px] leading-relaxed text-tone-300">
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2 lg:hidden">
        {experience.map((job, index) => (
          <button
            key={job.company}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={`Show ${job.company}`}
            aria-current={index === activeIndex}
            className={cn(
              "h-2 rounded-full transition-[width,background-color] duration-300",
              index === activeIndex ? "w-[26px] bg-accent" : "w-2 bg-tone-700",
            )}
          />
        ))}
      </div>
    </Shell>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-md border border-tone-800 text-lg leading-none text-accent transition-colors duration-200 hover:border-accent"
    >
      <span aria-hidden>{children}</span>
    </button>
  );
}
