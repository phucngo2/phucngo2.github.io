import type { ProjectItem as IProjectItem } from "@/configs/data/projects.data";
import { Card, CardBody, CardFooter, Image, Link } from "@heroui/react";
import { ProjectItemChip } from "./ProjectItemChip";

interface ProjectItemProps {
  item: IProjectItem;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ item }) => {
  return (
    <Card
      isPressable
      isHoverable
      shadow="sm"
      as={Link}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CardBody className="h-fit -flex-auto p-4">
        <Image
          isZoomed
          alt={item.name}
          className="w-full object-cover h-[200px]"
          shadow="sm"
          radius="sm"
          src={item.img}
          width="100%"
        />
      </CardBody>
      <CardFooter className="flex-col items-start justify-start p-4 pt-0">
        <b className="font-bold">{item.name}</b>
        <div className="text-default-700 text-justify mt-1">
          {item.description}
        </div>
        <div className="mt-4 flex gap-3 flex-wrap">
          {item.technicalStack.map((item) => (
            <ProjectItemChip key={item.title} item={item} />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
