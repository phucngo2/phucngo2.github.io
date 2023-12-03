import { AppShell, Box, ScrollArea } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { backgroundColor } from "config";
import { Outlet } from "react-router-dom";
import { Navbar, Suspense } from "shared/components";
import { useSwipe } from "shared/hooks";
import { useNavbarToggleStore } from "shared/stores";

interface LayoutProps {}

const AppLayout: React.FC<LayoutProps> = () => {
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
      className="app-layout"
      {...props}
    >
      <AppShell.Navbar p="lg" bg="dark.6" ref={navbarRef}>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main
        className="flex w-full h-full"
        bg={backgroundColor}
        pt="var(--app-shell-header-offset, 0px)"
        pb="var(--app-shell-footer-offset, 0px)"
        pl="var(--app-shell-navbar-offset, 0px)"
        pr="var(--app-shell-aside-offset, 0px)"
      >
        <Suspense>
          <ScrollArea offsetScrollbars className="w-full">
            <Box
              px={12}
              py={{
                base: 24,
                sm: 32,
              }}
            >
              <Outlet />
            </Box>
          </ScrollArea>
        </Suspense>
      </AppShell.Main>
      {/* <AppFloatingButton /> */}
    </AppShell>
  );
};

export default AppLayout;
