import { cn, HeroUIProvider, ScrollShadow } from "@heroui/react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <HeroUIProvider>
      <main className={cn("dark", "text-foreground bg-background")}>
        <ScrollShadow className="w-screen h-screen flex flex-col items-center px-8">
          <div className="w-full max-w-[720px] py-6 flex flex-col gap-6">
            {children}
          </div>
        </ScrollShadow>
      </main>
    </HeroUIProvider>
  );
};
