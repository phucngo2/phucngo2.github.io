import { AppShell } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { backgroundColor } from "config";
import { Outlet } from "react-router-dom";
import { Navbar, Suspense } from "shared/components";
import { useSwipe } from "shared/hooks";
import { useNavbarToggleStore } from "shared/stores";

interface LayoutProps {}

export const AppLayout: React.FC<LayoutProps> = () => {
  const { isOpened, closeNavbar, openNavbar } = useNavbarToggleStore();
  const navbarRef = useClickOutside(() => closeNavbar());
  const props = useSwipe({
    handleRightSwipe: openNavbar,
    handleLeftSwipe: closeNavbar,
  });

  return (
    <AppShell
      navbar={{
        width: {
          sm: "300px !important",
        },
        breakpoint: "sm",
        collapsed: { mobile: !isOpened, desktop: false },
      }}
      padding={{
        base: "md",
        sm: "xl",
      }}
      {...props}
    >
      <AppShell.Navbar p="lg" bg="dark.6" ref={navbarRef}>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main
        bg={backgroundColor}
        className="flex flex-col w-full h-full"
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </AppShell.Main>
      {/* <AppFloatingButton /> */}
    </AppShell>
  );
};
