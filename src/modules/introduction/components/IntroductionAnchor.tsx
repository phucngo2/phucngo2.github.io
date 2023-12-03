import { Anchor } from "@mantine/core";
import React from "react";

interface IntroductionAnchorProps {
  href: string;
  children: React.ReactNode;
}

export const IntroductionAnchor: React.FC<IntroductionAnchorProps> = ({
  children,
  href,
}) => {
  return (
    <Anchor href={href} className="font-semibold">
      {children}
    </Anchor>
  );
};
