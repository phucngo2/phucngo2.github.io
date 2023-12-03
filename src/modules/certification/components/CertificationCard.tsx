import { Card, Image, Text } from "@mantine/core";
import { CertificationItem } from "config";
import React from "react";

interface CertificationCardProps {
  item: CertificationItem;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  item,
}) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      component="a"
      href={item.src}
      target="_blank"
      rel="noreferrer"
    >
      <Card.Section>
        <Image src={item.img} h={160} alt={item.name} fit="contain" />
      </Card.Section>
      <Text size="lg" className="mt-5 font-semibold">
        {item.name}
      </Text>
    </Card>
  );
};
