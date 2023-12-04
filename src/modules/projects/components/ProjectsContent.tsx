import { projectsData } from "config";
import { ProjectCard } from "modules/projects/components";
import { twClassNames } from "utils";

interface ProjectsContentProps {
  className?: string;
}

export const ProjectsContent: React.FC<ProjectsContentProps> = ({
  className,
}) => {
  return (
    <div
      className={twClassNames(
        "grid w-full grid-cols-1 gap-8 lg:grid-cols-3",
        className ?? ""
      )}
    >
      {projectsData.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
    </div>
  );
};
