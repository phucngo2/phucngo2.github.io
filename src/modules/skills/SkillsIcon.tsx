import { Tooltip } from "@/components";
import type { SkillIcon } from "@/configs/data";
import { useThemeStore } from "@/stores";
import { cn, Image, Link } from "@heroui/react";
import { getSkillIconSrc } from "./utils";

interface SkillsIconProps {
  item: SkillIcon;
}

export const SkillsIcon: React.FC<SkillsIconProps> = ({ item }) => {
  const { isDark } = useThemeStore();
  return (
    <Tooltip color="default" content={item.name}>
      <Link href={item.href} target="_blank" rel="noopener noreferrer">
        <Image
          className={cn(
            "cursor-pointer p-3",
            isDark ? "light bg-content2" : "bg-content1"
          )}
          src={getSkillIconSrc(item.src)}
          alt={item.name}
          isZoomed
          width={60}
        />
      </Link>
    </Tooltip>
  );
};
