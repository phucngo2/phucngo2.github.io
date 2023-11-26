import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { AppFloatingButton, Navbar, Suspense } from "shared/components";
import { useNavbarToggleStore } from "shared/stores";

interface LayoutProps {}

export const AppLayout: React.FC<LayoutProps> = () => {
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
      <AppShell.Navbar p="lg" bg="dark.6">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main bg="gray.1" className="flex flex-col">
        <Suspense>
          <Outlet />
        </Suspense>
      </AppShell.Main>
      <AppFloatingButton />
    </AppShell>
  );
};
