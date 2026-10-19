import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/lib/types";
import { ProjectCard } from "./project-card";

/**
 * The curated four.
 *
 * Explicit column counts rather than `auto-fit`: left to choose for itself, the
 * grid picks three columns through the middle of its range and strands the
 * fourth project alone on a second row. Stepping 1 → 2 → 4 keeps the set
 * balanced at every width, which matters because these four are meant to read
 * as one group. 1240px is where four cards still clear ~285px each inside the
 * 1320px shell.
 */
export function ProjectGrid({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-[clamp(12px,2vw,20px)] min-[560px]:grid-cols-2 min-[1240px]:grid-cols-4">
      {projects.map((project, index) => (
        <Reveal
          key={project.name}
          // Capped so a four-card row still lands as one gesture, not a queue.
          delay={Math.min(index * 0.04, 0.16)}
          className="h-full"
        >
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
