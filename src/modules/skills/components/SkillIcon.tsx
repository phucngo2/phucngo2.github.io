import { Anchor, Avatar, Tooltip } from "@mantine/core";
import { SkillIcon as ISkillIcon } from "config";
import React from "react";
import { getSkillIconSrc } from "modules/skills/utils";

interface SkillIconProps {
  item: ISkillIcon;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ item }) => {
  return (
    <Tooltip label={item.name}>
      <Anchor key={item.name} href={item.href} target="_blank" rel="noreferrer">
        <Avatar
          src={getSkillIconSrc(item.src)}
          className="rounded-none"
          size="lg"
        />
      </Anchor>
    </Tooltip>
  );
};
