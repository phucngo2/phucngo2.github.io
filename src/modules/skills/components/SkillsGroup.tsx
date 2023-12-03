import { Title } from "@mantine/core";
import { SkillRender } from "config";
import { SkillIcon } from "modules/skills/components";
import React from "react";

interface SkillsGroupProps {
  skillGroupConfig: SkillRender;
}

export const SkillsGroup: React.FC<SkillsGroupProps> = ({
  skillGroupConfig,
}) => {
  return (
    <div>
      <Title order={5} className="mb-4">
        {skillGroupConfig.title}
      </Title>
      <div className="flex flex-row flex-wrap justify-between gap-5 sm:justify-start sm:gap-8">
        {skillGroupConfig.list.map((item) => (
          <SkillIcon key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};
