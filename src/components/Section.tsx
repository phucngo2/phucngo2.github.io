import { cn } from "@heroui/react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className,
}) => {
  return (
    <div id={id} className={cn("flex flex-col w-full gap-6", className ?? "")}>
      <h1 className="text-4xl font-bold">{title}</h1>
      {children}
    </div>
  );
};
