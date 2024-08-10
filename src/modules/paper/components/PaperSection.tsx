import { Title, TitleOrder } from "@mantine/core";
import React from "react";
import { twClassNames } from "utils";

interface PaperSectionProps {
  id: string;
  title: string;
  titleOrder: TitleOrder;
  children: React.ReactNode;
  className?: string;
}

export const PaperSection: React.FC<PaperSectionProps> = ({
  id,
  title,
  titleOrder,
  children,
  className,
}) => {
  return (
    <div
      id={id}
      className={twClassNames("flex flex-col w-full gap-6", className ?? "")}
    >
      <Title order={titleOrder}>{title}</Title>
      {children}
    </div>
  );
};
