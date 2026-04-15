import BlurFade from "@/components/magicui/blur-fade";
import { SectionHeader } from "@/components/section-header";
import { FinanceDemoModal } from "@/components/finance-demo-modal";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function SideProjectsSection() {
  return (
    <div className="space-y-12 w-full py-12">
      <SectionHeader
        label="Side Projects"
        title="I build things too"
        description="Personal tools I've built and use myself."
        blurDelay={BLUR_FADE_DELAY * 13}
      />
      <div className="flex flex-col gap-2 max-w-[800px] mx-auto">
        {DATA.sideProjects.map((project, id) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
            <div className="flex items-center justify-between p-4 rounded-xl border hover:bg-muted/50 transition-colors gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-lg flex-shrink-0">
                  {project.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">{project.title}</div>
                  <div className="text-xs text-muted-foreground">{project.description}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {project.hasDemo && <FinanceDemoModal />}
                {project.status === "coming-soon" ? (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                    Coming soon
                  </span>
                ) : project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View →
                  </Link>
                ) : null}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
