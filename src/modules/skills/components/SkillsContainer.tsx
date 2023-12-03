import { skillsRender } from "config";
import { SkillsGroup } from "modules/skills/components";
import { PageContainer, PageTitle } from "shared/components";

export const SkillsContainer = () => {
  return (
    <PageContainer>
      <PageTitle />
      <div className="flex flex-col w-full gap-8">
        {skillsRender.map((item) => (
          <SkillsGroup key={item.title} skillGroupConfig={item} />
        ))}
      </div>
    </PageContainer>
  );
};
