import { cn } from "@heroui/react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <p className={cn("text-justify font-medium text-base", className ?? "")}>
      {children}
    </p>
  );
};
