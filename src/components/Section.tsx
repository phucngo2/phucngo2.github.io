import { cn } from "@heroui/react";

interface SectionProps {
  id: string;
  title: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className,
}) => {
  return (
    <div
      id={id}
      className={cn("flex flex-col w-full gap-6 py-5", className ?? "")}
    >
      {typeof title === "string" ? (
        <h1 className="text-3xl font-bold">{title}</h1>
      ) : (
        title
      )}
      {children}
    </div>
  );
};
