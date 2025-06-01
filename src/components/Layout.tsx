import { themeAtom } from "@/stores";
import { cn, ScrollShadow } from "@heroui/react";
import { useAtom } from "jotai";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useAtom(themeAtom);
  return (
    <main className={cn(theme, "text-foreground bg-background")}>
      <ScrollShadow
        id="main-layout"
        className=" w-screen h-screen flex flex-col items-center px-8 overflow-x-hidden relative"
      >
        <div className="w-full max-w-[720px] py-12 flex flex-col">
          {children}
        </div>
      </ScrollShadow>
    </main>
  );
};
