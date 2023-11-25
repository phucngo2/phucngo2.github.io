import { Affix, Burger } from "@mantine/core";
import { useNavbarToggleStore } from "shared/stores";

export const FloatingButton = () => {
  const { isOpened, toggleNavbar } = useNavbarToggleStore();
  return (
    <Affix position={{ bottom: 30, right: 30 }}>
      <Burger
        opened={isOpened}
        onClick={toggleNavbar}
        hiddenFrom="sm"
        size="md"
        bg="blue"
        color="white"
        className="rounded"
      />
    </Affix>
  );
};
