import type { ProjectItemBadge } from "@/configs/data/badges.data";
import { Chip, cn } from "@heroui/react";

interface ProjectItemChipProps {
  item: ProjectItemBadge;
}

export const ProjectItemChip: React.FC<ProjectItemChipProps> = ({ item }) => {
  return (
    <Chip className={cn("bg-gradient-to-br", item.color)} variant="shadow">
      {item.title}
    </Chip>
  );
};
