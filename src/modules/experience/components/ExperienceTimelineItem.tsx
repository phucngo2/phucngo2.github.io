import { Anchor, Box, Text, Timeline } from "@mantine/core";
import { ExperienceItem } from "config";
import React from "react";

interface ExperienceTimelineItemProps {
  item: ExperienceItem;
}

export const ExperienceTimelineItem: React.FC<ExperienceTimelineItemProps> = ({
  item,
}) => {
  return (
    <Timeline.Item
      bullet={<></>}
      title={
        <Anchor
          href={item.src}
          target="_blank"
          rel="noreferrer"
          size="lg"
          className="font-semibold leading-tight"
        >
          {item.name}
        </Anchor>
      }
      __active
      __lineActive
    >
      <Text size="sm" className="font-medium">
        {item.role}
      </Text>
      <Text c="dimmed" size="xs" mt={4}>
        {item.time}
      </Text>
      {item.description && (
        <Box c="dimmed" size="sm" mt={4} className="text-justify sm:text-start">
          {item.description}
        </Box>
      )}
    </Timeline.Item>
  );
};
