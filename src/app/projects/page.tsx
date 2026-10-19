import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { RepoList } from "@/components/projects/repo-list";
import { fetchRepos } from "@/components/projects/repos";
import { PageHeader } from "@/components/ui/section-heading";
import { Shell } from "@/components/ui/shell";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work in database engineering, full-stack development and security tooling, plus the full public repository list.",
};

/**
 * Two halves, in order of how much they are worth a recruiter's attention: the
 * four curated projects, then the raw repository list.
 *
 * This is an async Server Component — the GitHub request happens during
 * rendering and its result is cached by `fetchRepos`'s own `revalidate`, so
 * there is no client-side loading state and no API call from the browser.
 */
export default async function ProjectsPage() {
  const repos = await fetchRepos();

  return (
    <main>
      <Shell className="py-[clamp(48px,7vw,88px)]">
        <PageHeader
          title="Projects"
          lede="Four pieces of work worth reading about, then everything else on GitHub."
        />

        <ProjectGrid projects={projects} />

        {/* Renders nothing when GitHub is unreachable or rate-limited. */}
        <RepoList repos={repos} />
      </Shell>
    </main>
  );
}
