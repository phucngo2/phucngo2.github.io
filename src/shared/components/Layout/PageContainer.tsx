import { Container } from "@mantine/core";
import { twClassNames } from "utils";

type PageContainer = {
  children: React.ReactNode;
  classNames?: string;
};

export const PageContainer: React.FC<PageContainer> = ({
  children,
  classNames,
}) => {
  return (
    <Container
      fluid
      className={twClassNames(
        "flex flex-col items-start flex-1 w-full gap-6 sm:px-16",
        classNames ?? ""
      )}
    >
      {children}
    </Container>
  );
};
