import { Section } from "@/components";
import { Timeline } from "@/components/Timeline";
import { Sections } from "@/configs";
import { experienceData } from "@/configs/data/experience.data";

export const Experience = () => {
  return (
    <Section id={Sections.Experience} title="Experience">
      <Timeline items={experienceData} className="ml-1" />
    </Section>
  );
};
