import { Title as MantineTitle } from "@mantine/core";
import { NavbarControlButton } from "shared/components";
import { useCurrentPageConfig } from "shared/hooks";

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
