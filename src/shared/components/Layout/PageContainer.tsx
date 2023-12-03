import { Container } from "@mantine/core";
import { twClassNames } from "utils";

type PageContainer = {
  children?: React.ReactNode;
  className?: string;
};

export const PageContainer: React.FC<PageContainer> = ({
  children,
  className,
}) => {
  return (
    <Container
      fluid
      className={twClassNames(
        "flex flex-col items-start flex-1 w-full gap-6",
        className ?? ""
      )}
    >
      {children}
    </Container>
  );
};
