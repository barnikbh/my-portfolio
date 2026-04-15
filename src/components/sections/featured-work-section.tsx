import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function FeaturedWorkSection() {
  return (
    <div className="space-y-12 w-full py-12">
      <SectionHeader
        label="Featured Work"
        title="Things I've shipped"
        description="A selection of product work across AI, CCaaS, and enterprise SaaS."
        blurDelay={BLUR_FADE_DELAY * 11}
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {DATA.projects.map((project, id) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
