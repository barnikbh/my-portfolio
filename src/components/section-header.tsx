import BlurFade from "@/components/magicui/blur-fade";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  blurDelay: number;
  descriptionClassName?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  blurDelay,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <BlurFade delay={blurDelay}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            {label}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
          {description && (
            <p
              className={
                descriptionClassName ??
                "text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              }
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </BlurFade>
  );
}
