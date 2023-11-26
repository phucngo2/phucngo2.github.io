import { Affix, Burger } from "@mantine/core";
import { useNavbarToggleStore } from "shared/stores";

export const AppFloatingButton = () => {
  const { isOpened, toggleNavbar } = useNavbarToggleStore();
  return (
    <Affix position={{ bottom: 30, right: 30 }}>
      <Burger
        onClick={toggleNavbar}
        opened={isOpened}
        hiddenFrom="sm"
        size="md"
        bg="gray"
        color="white"
        className="flex flex-row items-center justify-center rounded"
        w={40}
        h={40}
      />
    </Affix>
  );
};
