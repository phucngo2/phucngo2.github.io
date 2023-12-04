import { CertificationContent } from "modules/certification/components";
import { ExperienceTimeline } from "modules/experience/components";
import { IntroductionContent } from "modules/introduction/components";
import { PaperSection } from "modules/paper/components";
import { ProjectsContent } from "modules/projects/components";
import { SkillsContent } from "modules/skills/components";

export const PaperContainer = () => {
  return (
    <div className="w-full max-w-[720px] py-6 flex flex-col gap-6">
      <PaperSection title="Phúc Ngô" titleOrder={1} id="introduction">
        <IntroductionContent isAnchorRedirectWithinPage />
      </PaperSection>
      <PaperSection
        title="Experience"
        titleOrder={2}
        id="experience"
        className="pt-6"
      >
        <ExperienceTimeline />
      </PaperSection>
      <PaperSection
        title="Technical skills"
        titleOrder={2}
        id="skills"
        className="pt-6"
      >
        <SkillsContent />
      </PaperSection>
      <PaperSection
        title="Side projects"
        titleOrder={2}
        id="projects"
        className="pt-6"
      >
        <ProjectsContent className="lg:grid-cols-2" />
      </PaperSection>
      <PaperSection
        title="Certification"
        titleOrder={2}
        id="certifications"
        className="pt-6"
      >
        <CertificationContent className="lg:grid-cols-2" />
      </PaperSection>
    </div>
  );
};
