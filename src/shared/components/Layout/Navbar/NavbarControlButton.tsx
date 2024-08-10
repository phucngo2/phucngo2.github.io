import { Burger } from "@mantine/core";
import { useNavbarToggleStore } from "shared/stores";

export const NavbarControlButton = () => {
  const { isOpened, toggleNavbar } = useNavbarToggleStore();
  return (
    <Burger
      onClick={toggleNavbar}
      opened={isOpened}
      hiddenFrom="sm"
      size="md"
      bg="gray"
      color="white"
      className="flex flex-row items-center justify-center rounded"
    />
  );
};
