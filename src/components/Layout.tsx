import { HeroUIProvider, ScrollShadow } from "@heroui/react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <HeroUIProvider>
      <ScrollShadow
        id="main-layout"
        className="w-screen h-screen flex flex-col items-center px-8 overflow-x-hidden"
      >
        <div className="w-full max-w-[720px] py-12 flex flex-col">
          {children}
        </div>
      </ScrollShadow>
    </HeroUIProvider>
  );
};
