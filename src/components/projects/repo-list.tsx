import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import type { Repo } from "@/lib/types";
import { formatUpdated } from "./repos";

/**
 * The long tail of public repositories, below the curated four.
 *
 * Deliberately quieter than the cards above — a dense list of hairline panels
 * rather than more `GlowCard`s — so it reads as an appendix and never competes
 * with the work that was chosen for the page.
 */
export function RepoList({ repos }: { repos: readonly Repo[] }) {
  if (repos.length === 0) return null;

  return (
    <section className="mt-[clamp(48px,7vw,80px)]">
      <div className="rule-fade mb-[clamp(32px,5vw,48px)]" />

      <Eyebrow className="mb-2.5">More on GitHub</Eyebrow>
      <p className="mb-8 max-w-[52ch] text-[15px] text-tone-400">
        Everything else I have published, most recently updated first.
      </p>

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))] gap-3">
        {repos.map((repo, index) => (
          <Reveal key={repo.id} delay={Math.min(index * 0.03, 0.15)} className="h-full">
            <li className="h-full list-none">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel flex h-full flex-col gap-2 p-[18px] transition-[border-color,transform] duration-200 hover:border-accent-600 hover:translate-x-1"
              >
                <span className="font-medium text-ink">{repo.name}</span>

                {repo.description ? (
                  <span className="line-clamp-2 text-[13px] leading-[1.55] text-tone-400">
                    {repo.description}
                  </span>
                ) : null}

                <span className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs text-tone-500">
                  {repo.language ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-accent-500" />
                      {repo.language}
                    </span>
                  ) : null}

                  {repo.stargazers_count > 0 ? (
                    <span>
                      {repo.stargazers_count}
                      <span className="sr-only"> stars</span>
                      <span aria-hidden="true"> ★</span>
                    </span>
                  ) : null}

                  <span>Updated {formatUpdated(repo.updated_at)}</span>
                </span>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
