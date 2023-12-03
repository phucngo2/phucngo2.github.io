import { Affix } from "@mantine/core";
import { NavbarControlButton } from "shared/components";

export const AppFloatingButton = () => {
  return (
    <Affix position={{ bottom: 30, right: 30 }}>
      <NavbarControlButton />
    </Affix>
  );
};
