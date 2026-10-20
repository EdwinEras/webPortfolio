import { profile } from "./content";

/** Navigation and outbound links. Kept apart from `portfolio.json` because
 *  these are route definitions, not content. */

export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Certifications", href: "/certifications" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS: readonly NavLink[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/edwineras/" },
  { name: "GitHub", href: `https://github.com/${profile.githubUser}` },
  { name: "ResearchGate", href: "https://www.researchgate.net/profile/Edwin-Eras-Zamora" },
] as const;

export const RESUME_HREF = profile.resume;

/** Breakpoint, in pixels, at which the header switches from the hamburger menu
 *  to the full nav and the experience carousel becomes a stacked list.
 *  Mirrors Tailwind's `lg` so CSS and JS agree. */
export const WIDE_BREAKPOINT = 1024;
