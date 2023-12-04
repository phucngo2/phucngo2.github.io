import { skillsRender } from "config";
import { SkillsGroup } from "modules/skills/components";

export const SkillsContent = () => {
  return (
    <div className="flex flex-col w-full gap-8">
      {skillsRender.map((item) => (
        <SkillsGroup key={item.title} skillGroupConfig={item} />
      ))}
    </div>
  );
};
