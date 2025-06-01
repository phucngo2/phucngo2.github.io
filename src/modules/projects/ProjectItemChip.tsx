import type { ProjectItemBadge } from "@/configs/data/badges.data";
import { Chip, cn } from "@heroui/react";

interface ProjectItemChipProps {
  item: ProjectItemBadge;
}

export const ProjectItemChip: React.FC<ProjectItemChipProps> = ({ item }) => {
  return (
    <Chip
      classNames={{
        base: cn("bg-gradient-to-br project-item-chip", item.color),
        content: "text-white font-semibold",
      }}
      variant="shadow"
    >
      {item.title}
    </Chip>
  );
};
