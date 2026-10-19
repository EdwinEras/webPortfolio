/** Domain types for everything rendered from `src/content/portfolio.json`.
 *  The JSON is the single source of truth for content; these types are the
 *  contract components code against. */

export interface Profile {
  name: string;
  initials: string;
  headline: string;
  location: string;
  availability: string;
  summary: string;
  bio: string;
  photo: string;
  resume: string;
  githubUser: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Expertise {
  step: string;
  verb: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Tech {
  name: string;
  image: string;
}

export interface Job {
  company: string;
  role: string;
  duration: string;
  technologies: string[];
  description: string[];
}

export interface Certificate {
  image: string;
  title: string;
  /** Stored as `dd-mm-yyyy`. Use `formatCertificateDate` for display. */
  date: string;
}

export interface Project {
  name: string;
  kind: string;
  image: string;
  /** The repository URL, or null when no public repo exists — employer work
   *  and unpublished projects must not advertise a link that goes nowhere. */
  url: string | null;
  stack: string[];
  description: string;
}

export interface ContactLink {
  name: string;
  image: string;
  href: string;
  detail: string;
}

export interface PortfolioContent {
  profile: Profile;
  stats: Stat[];
  expertise: Expertise[];
  tech: Tech[];
  experience: Job[];
  certificates: Certificate[];
  projects: Project[];
  contacts: ContactLink[];
}

/** A repository as returned by the GitHub public REST API, narrowed to the
 *  fields this site renders. */
export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}
