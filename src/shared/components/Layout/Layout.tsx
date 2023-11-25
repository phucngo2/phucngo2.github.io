import { AppShell } from "@mantine/core";
import { FloatingButton } from "shared/components";
import { useNavbarToggleStore } from "shared/stores";

export const Layout = () => {
  const { isOpened } = useNavbarToggleStore();

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !isOpened, desktop: false },
      }}
      padding="md"
    >
      <AppShell.Navbar p="md" bg="dark">
        Navbar
      </AppShell.Navbar>
      <AppShell.Main bg="gray.1">Main</AppShell.Main>
      <FloatingButton />
    </AppShell>
  );
};
