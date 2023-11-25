import { AppShell } from "@mantine/core";
import { FloatingButton, Navbar } from "shared/components";
import { useNavbarToggleStore } from "shared/stores";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
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
      <AppShell.Navbar p="lg" bg="dark">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main bg="gray.1">{children}</AppShell.Main>
      <FloatingButton />
    </AppShell>
  );
};
