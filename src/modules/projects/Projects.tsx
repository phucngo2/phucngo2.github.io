import { Section } from "@/components";
import { Sections } from "@/configs";
import { projectsData } from "@/configs/data/projects.data";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  return (
    <Section id={Sections.Projects} title="Side projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectItem key={project.id} item={project} />
        ))}
      </div>
    </Section>
  );
};
