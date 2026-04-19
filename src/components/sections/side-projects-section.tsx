import BlurFade from "@/components/magicui/blur-fade";
import { SectionHeader } from "@/components/section-header";
import { FinanceDemoModal } from "@/components/finance-demo-modal";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

async function getLastCommitDate(repo: string): Promise<string | null> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
    if (token) headers.Authorization = `Bearer ${token}`;
    const res = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`, {
      headers,
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data[0]?.commit?.committer?.date ?? null;
  } catch {
    return null;
  }
}

function relativeTime(isoDate: string): string {
  const diff = Date.now() - new Date(isoDate).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export async function SideProjectsSection() {
  const commitDates: Record<string, string | null> = {};
  await Promise.all(
    DATA.sideProjects.map(async (project) => {
      if ("githubRepo" in project && project.githubRepo) {
        commitDates[project.githubRepo as string] = await getLastCommitDate(project.githubRepo as string);
      }
    })
  );

  return (
    <div className="space-y-12 w-full py-12">
      <SectionHeader
        label="Side Projects"
        title="I build things too"
        description="Personal tools I've built and use myself."
        blurDelay={BLUR_FADE_DELAY * 13}
      />
      <div className="flex flex-col gap-2 max-w-[800px] mx-auto">
        {DATA.sideProjects.map((project, id) => {
          const githubRepo = "githubRepo" in project ? (project.githubRepo as string) : undefined;
          const lastCommit = githubRepo ? commitDates[githubRepo] : null;

          return (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
              <div className="flex items-center justify-between p-4 rounded-xl border hover:bg-muted/50 transition-colors gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-lg flex-shrink-0 overflow-hidden">
                    {typeof project.icon === "string" && project.icon.startsWith("/") ? (
                      <Image src={project.icon} alt={project.title} width={36} height={36} className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      project.icon
                    )}
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
                  ) : githubRepo && "href" in project && project.href ? (
                    <div className="flex flex-col items-end gap-0.5">
                      <Link
                        href={project.href as string}
                        target="_blank"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icons.github className="size-3" />
                        GitHub →
                      </Link>
                      {lastCommit && (
                        <span className="text-[10px] text-muted-foreground/60">
                          Updated {relativeTime(lastCommit)}
                        </span>
                      )}
                    </div>
                  ) : "href" in project && project.href ? (
                    <Link
                      href={project.href as string}
                      target="_blank"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      View →
                    </Link>
                  ) : null}
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}
