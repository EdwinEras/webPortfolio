import Image from "next/image";
import { ChipList } from "@/components/ui/chip";
import { GlowCard } from "@/components/ui/glow-card";
import type { Project } from "@/lib/types";

/**
 * One curated piece of work.
 *
 * The cover image is dropped below 560px rather than shrunk: at that width it
 * would be a 60px-tall band of texture, which costs a download and reads as an
 * artefact. The card still holds its shape because the body is what sets the
 * height.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <GlowCard as="article" className="h-full">
      {/* Decorative: the project's name is already the heading below, so an
          alt here would just make a screen reader say it twice. */}
      <div className="relative hidden h-[190px] w-full shrink-0 overflow-hidden bg-tone-900 min-[560px]:block">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 400px"
          className="object-cover opacity-[0.68]"
        />
      </div>

      <div className="flex flex-1 flex-col p-[clamp(18px,3vw,26px)]">
        <p className="eyebrow mb-3 text-accent-400">{project.kind}</p>

        <h3 className="mb-3 text-[22px] font-semibold tracking-[-0.02em]">{project.name}</h3>

        <p className="mb-[18px] text-[15px] leading-[1.6] text-tone-300">{project.description}</p>

        <ChipList items={project.stack} className={project.url ? "mb-5" : undefined} />

        {/*
          Not every project has a repository to link to — work done for an
          employer generally has none by nature. Those entries carry a null
          `url` and simply end after their stack, rather than offering a
          "View repository" link that leads somewhere it isn't.

          `mt-auto` pins the link to the bottom so it lines up across a row of
          cards whose descriptions differ in length.
        */}
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-sm text-accent transition-colors hover:text-accent-200"
          >
            View repository <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </GlowCard>
  );
}
