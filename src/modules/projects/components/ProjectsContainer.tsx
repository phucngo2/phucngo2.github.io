import { ProjectsContent } from "modules/projects/components";
import { PageContainer, PageTitle } from "shared/components";

export const ProjectsContainer = () => {
  return (
    <PageContainer className="gap-8">
      <PageTitle />
      <ProjectsContent />
    </PageContainer>
  );
};
