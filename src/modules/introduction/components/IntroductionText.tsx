import { Text } from "@mantine/core";
import { twClassNames } from "utils";

interface IntroductionTextProps {
  children: React.ReactNode;
  className?: string;
}

export const IntroductionText: React.FC<IntroductionTextProps> = ({
  children,
  className,
}) => {
  return (
    <Text
      size="lg"
      className={twClassNames("text-justify font-medium", className ?? "")}
    >
      {children}
    </Text>
  );
};
