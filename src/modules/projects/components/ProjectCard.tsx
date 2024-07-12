import { Box, Card, Image, Text } from "@mantine/core";
import { ProjectItem } from "config";
import { ProjectBadge } from "./ProjectBadge";

interface ProjectCardProps {
  item: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      component="a"
      href={item.url}
      target="_blank"
      rel="noreferrer"
    >
      <Card.Section>
        <Image src={item.img} h={160} alt={item.name} fit="cover" />
      </Card.Section>
      <Text size="lg" className="font-semibold mt-[14px]">
        {item.name}
      </Text>
      <Box c="dimmed" size="sm" className="mt-1 mb-4 text-justify">
        {item.description}
      </Box>
      <Box mt="auto" c="dimmed" className="flex flex-row flex-wrap gap-2">
        {item.technicalStack.map((badge) => (
          <ProjectBadge key={item.id + badge.title} badge={badge} />
        ))}
      </Box>
    </Card>
  );
};
