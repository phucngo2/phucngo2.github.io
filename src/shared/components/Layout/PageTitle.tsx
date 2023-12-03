import { Title as MantineTitle } from "@mantine/core";
import { useCurrentPageConfig } from "shared/hooks";
import { NavbarControlButton } from ".";

interface TitleProps {
  title?: React.ReactNode;
}

export const PageTitle: React.FC<TitleProps> = ({ title }) => {
  const { currentPageConfig } = useCurrentPageConfig();
  return (
    <div className="flex flex-row items-center justify-between w-full gap-4">
      <NavbarControlButton />
      <MantineTitle order={1} className="text-3xl text-end">
        {title ?? currentPageConfig.name}
      </MantineTitle>
    </div>
  );
};
