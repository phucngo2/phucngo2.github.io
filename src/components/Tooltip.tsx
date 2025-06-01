import { Tooltip as HeroTooltip, type TooltipProps } from "@heroui/react";
import { useEffect, useState } from "react";

interface AppTooltipProps extends TooltipProps {
  children?: React.ReactNode;
}

export const Tooltip: React.FC<AppTooltipProps> = ({ children, ...props }) => {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    const el = document.querySelector("#main-layout");
    setContainer(el ?? document.body);
  }, []);

  if (!container) return null;
  return (
    <HeroTooltip portalContainer={container} {...props}>
      {children}
    </HeroTooltip>
  );
};
