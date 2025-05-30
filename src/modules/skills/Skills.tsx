import { Section } from "@/components";
import { Sections } from "@/configs";
import { skillsRender } from "@/configs/data";
import { SkillsGroup } from "./SkillsGroup";

export const Skills = () => {
  return (
    <Section id={Sections.Skills} title="Technical Skills">
      {skillsRender.map((skillGroup) => (
        <SkillsGroup key={skillGroup.title} item={skillGroup} />
      ))}
    </Section>
  );
};
