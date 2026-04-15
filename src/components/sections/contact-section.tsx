import BlurFade from "@/components/magicui/blur-fade";
import ContactForm from "@/components/contact-form";
import { SectionHeader } from "@/components/section-header";

const BLUR_FADE_DELAY = 0.04;

export function ContactSection() {
  return (
    <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 18}>
        <div className="space-y-6">
          <SectionHeader
            label="Contact"
            title="Let's get in touch"
            description="Open to collaboration, coaching, and speaking opportunities. I'd love to hear from you."
            blurDelay={BLUR_FADE_DELAY * 18}
            descriptionClassName="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          />
          <ContactForm />
        </div>
      </BlurFade>
    </div>
  );
}
