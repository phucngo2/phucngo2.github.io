import { Button, cn, type ButtonProps } from "@heroui/react";
import { Tooltip } from "../Tooltip";

interface InfoMenuItemProps extends ButtonProps {
  tooltip?: React.ReactNode;
}

export const InfoMenuItem: React.FC<InfoMenuItemProps> = ({
  children,
  className,
  tooltip,
  ...props
}) => {
  return (
    <Tooltip content={tooltip}>
      <Button
        isIconOnly
        size="sm"
        variant="light"
        className={cn(
          "text-foreground/60 hover:text-foreground",
          className ?? ""
        )}
        {...props}
      >
        {children}
      </Button>
    </Tooltip>
  );
};
