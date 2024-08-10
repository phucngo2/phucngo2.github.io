import { Badge } from "@mantine/core";
import { ProjectItemBadge } from "config";
import React from "react";

interface ProjectBadgeProps {
  badge: ProjectItemBadge;
}

export const ProjectBadge: React.FC<ProjectBadgeProps> = ({ badge }) => {
  return (
    <Badge color={badge.color} className="text-xs font-semibold normal-case">
      {badge.title}
    </Badge>
  );
};
