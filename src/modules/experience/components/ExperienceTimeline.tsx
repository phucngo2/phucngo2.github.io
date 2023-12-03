import { Timeline } from "@mantine/core";
import { experienceData } from "config";
import { ExperienceTimelineItem } from "modules/experience/components";
import { useMemo } from "react";

export const ExperienceTimeline = () => {
  const reversedExperienceData = useMemo(
    () => experienceData.slice().reverse(),
    []
  );
  return (
    <Timeline active={experienceData.length} lineWidth={2} reverseActive>
      {reversedExperienceData.map((item) => (
        <ExperienceTimelineItem item={item} key={item.id} />
      ))}
    </Timeline>
  );
};
