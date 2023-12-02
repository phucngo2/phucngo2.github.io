import { skillsRender } from "config";
import { PageContainer, PageTitle } from "shared/components";
import { SkillsGroup } from ".";

export const SkillsContainer = () => {
  return (
    <PageContainer>
      <PageTitle />
      <div className="flex flex-col flex-1 w-full gap-8">
        {skillsRender.map((item) => (
          <SkillsGroup key={item.title} skillGroupConfig={item} />
        ))}
      </div>
    </PageContainer>
  );
};
