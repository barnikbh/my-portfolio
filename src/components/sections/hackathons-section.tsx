import BlurFade from "@/components/magicui/blur-fade";
import { HackathonCard } from "@/components/hackathon-card";
import { SectionHeader } from "@/components/section-header";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function HackathonsSection() {
  return (
    <div className="space-y-12 w-full py-12">
      <SectionHeader
        label="Hackathons"
        title="I like building things"
        description={
          <>
            During my time in university, I attended multiple hackathons. People
            from around the country would come together and build incredible things in 2–3 days. It
            was eye-opening to see the endless possibilities brought to life by a group of motivated
            and passionate individuals.
          </>
        }
        blurDelay={BLUR_FADE_DELAY * 15}
      />
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
          {DATA.hackathons.map((project, id) => (
            <BlurFade
              key={project.title + project.dates}
              delay={BLUR_FADE_DELAY * 17 + id * 0.05}
            >
              <HackathonCard
                title={project.title}
                description={project.description}
                location={project.location}
                dates={project.dates}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </ul>
      </BlurFade>
    </div>
  );
}
