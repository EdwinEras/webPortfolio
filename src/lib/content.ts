import raw from "@/content/portfolio.json";
import type { Certificate, PortfolioContent } from "./types";

/** The parsed content file. Imported once and reused, so every consumer sees
 *  the same objects and the JSON shape is validated against `PortfolioContent`
 *  at build time. */
const content = raw as PortfolioContent;

export const profile = content.profile;
export const stats = content.stats;
export const expertise = content.expertise;
export const tech = content.tech;
export const experience = content.experience;
export const projects = content.projects;
export const contacts = content.contacts;

/** Certificate dates are authored as `dd-mm-yyyy`. Parsing them by hand avoids
 *  `new Date(string)` guessing at the day/month order across locales. */
function parseCertificateDate(value: string): number {
  const [day, month, year] = value.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** `28-04-2026` → `April 2026`. The day is never shown; only the month a
 *  credential was earned is meaningful. */
export function formatCertificateDate(value: string): string {
  const [, month, year] = value.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

/** Certificates newest first. Sorted here rather than in the page so the
 *  ordering is identical everywhere it appears. */
export const certificates: Certificate[] = [...content.certificates].sort(
  (a, b) => parseCertificateDate(b.date) - parseCertificateDate(a.date),
);

/** The handful of credentials featured on the home page. */
export const featuredCertificates = certificates.slice(0, 4);

export const certificateCount = certificates.length;

export default content;
