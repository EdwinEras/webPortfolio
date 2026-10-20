import { CredentialsPreview } from "@/components/home/credentials-preview";
import { CtaBand } from "@/components/home/cta-band";
import { Experience } from "@/components/home/experience";
import { ExpertiseGrid } from "@/components/home/expertise-grid";
import { Hero } from "@/components/home/hero";
import { StatsBand } from "@/components/home/stats-band";
import { TechMarquee } from "@/components/home/tech-marquee";

/** The home page is a sequence of full-width bands. Each one owns its own
 *  ground and padding, so reordering them here is safe. */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBand />
      <TechMarquee />
      <ExpertiseGrid />
      <Experience />
      <CredentialsPreview />
      <CtaBand />
    </main>
  );
}
