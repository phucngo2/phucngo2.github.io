import { PageContainer, PageTitle } from "shared/components";
import { ExperienceTimeline } from ".";

export const ExperienceContainer = () => {
  return (
    <PageContainer className="gap-8">
      <PageTitle />
      <div className="flex flex-col w-full gap-8">
        <ExperienceTimeline />
      </div>
    </PageContainer>
  );
};
