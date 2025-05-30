import { Tooltip as HeroTooltip, type TooltipProps } from "@heroui/react";

interface AppTooltipProps extends TooltipProps {
  children?: React.ReactNode;
}

export const Tooltip: React.FC<AppTooltipProps> = ({ children, ...props }) => {
  return (
    <HeroTooltip
      portalContainer={document.querySelector("#main-layout") ?? document.body}
      {...props}
    >
      {children}
    </HeroTooltip>
  );
};
