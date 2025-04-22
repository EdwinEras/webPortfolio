import CardXP from "./components/card-xp";
import Carousel from "./components/carousel";
import GridTech from "./components/grid-tech";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight pb-10">
            Edwin Eras
          </h2>
        </div>
      </div>    
      <div>
        <p>
          Welcome to my web portfolio, I have a Bachelor in Computer Science and Post-Graduate 
          certificates in Databases and Cybersecurity, additionally 5+ years experience working
          as a full-stack developer, database developer, researching and volunteering.
        </p> <br />
        <p>
          I have a passion for problem solving, researching and helping others. Personally I 
          find this activities very rewarding because helps me to achieve my profesional goals
          and be up to date with new frameworks, tools and technologies in general.
        </p> <br />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight mt-10">
          Education and Studies
        </h2>
      </div>
      <div className="size-full">
        <Carousel />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight my-10">
          Work Experience
        </h2>
      </div>
      <CardXP />

      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight my-10">
          Languages and Tech Skills
        </h2>
      </div>
      <GridTech />
    </div>
  );
}
