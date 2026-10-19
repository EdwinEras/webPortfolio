import { profile, projects } from "@/lib/content";
import type { Repo } from "@/lib/types";

/**
 * Loading the public repository list for the "everything else" half of the
 * Projects page.
 *
 * This runs on the server and is revalidated hourly, which matters for three
 * reasons: the visitor never sees a loading flash, GitHub's 60-requests-per-
 * hour anonymous limit is measured against the server rather than every
 * visitor's IP, and no API token is involved at all — the previous client-side
 * version sent an `Authorization` header built from `process.env.GITHUB_AUTH`,
 * which is `undefined` in the browser and would have leaked the token if it
 * ever had been defined.
 */

/** GitHub's cap for a single page of results. */
const PER_PAGE = 100;

/** Enough to show range without turning the page into a directory listing. */
const MAX_SHOWN = 12;

/** How long a cached repository list stays fresh, in seconds. */
export const REPOS_REVALIDATE_SECONDS = 3600;

const ENDPOINT =
  `https://api.github.com/users/${profile.githubUser}/repos` +
  `?sort=updated&direction=desc&per_page=${PER_PAGE}`;

/** Curated work is told properly above; don't list it again as a bare repo. */
const CURATED_URLS = new Set(
  projects
    // Curated entries without a public repo can't collide with one.
    .flatMap((project) => (project.url ? [project.url] : []))
    .map((url) => url.replace(/\/+$/, "").toLowerCase()),
);

/**
 * Fetches the public repositories, newest activity first.
 *
 * Never throws: GitHub being down, rate-limiting us, or changing its response
 * shape degrades the page to its curated half rather than failing the build or
 * the request.
 */
export async function fetchRepos(): Promise<Repo[]> {
  try {
    const response = await fetch(ENDPOINT, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REPOS_REVALIDATE_SECONDS },
    });

    if (!response.ok) return [];

    const payload: unknown = await response.json();
    if (!Array.isArray(payload)) return [];

    return (payload as Repo[])
      .filter((repo) => !repo.fork)
      .filter((repo) => !CURATED_URLS.has(repo.html_url.replace(/\/+$/, "").toLowerCase()))
      .slice(0, MAX_SHOWN)
      .map((repo) => ({ ...repo, description: usefulDescription(repo) }));
  } catch {
    return [];
  }
}

/** Ignores case, underscores and hyphens: `Streaming_System` ≡ `streaming system`. */
function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * Several repositories carry a "description" that just restates their name.
 * Rendering it would print the same words twice in one card, so it is dropped
 * here — at the boundary — leaving the list component to render whatever it is
 * handed without second-guessing it.
 */
function usefulDescription(repo: Repo): string | null {
  if (!repo.description) return null;
  return slug(repo.description) === slug(repo.name) ? null : repo.description;
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/**
 * `2026-09-14T12:00:00Z` → `Sep 2026`.
 *
 * Read in UTC rather than through `toLocaleDateString` so the string does not
 * depend on the server's timezone — the same repo must not render as two
 * different months on two different deploys.
 */
export function formatUpdated(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
