import { projectsData } from "config/data/projects.data";
import { ProjectCard } from "modules/projects/components";
import { PageContainer, PageTitle } from "shared/components";

export const ProjectsContainer = () => {
  return (
    <PageContainer className="gap-8">
      <PageTitle />
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
        {projectsData.map((item) => (
          <ProjectCard key={item.id} />
        ))}
      </div>
    </PageContainer>
  );
};
