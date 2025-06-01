import type { SkillIcon } from "@/configs/data";
import { Image, Link, Tooltip } from "@heroui/react";
import { getSkillIconSrc } from "./utils";

interface SkillsIconProps {
  item: SkillIcon;
}

export const SkillsIcon: React.FC<SkillsIconProps> = ({ item }) => {
  return (
    <Tooltip color="default" content={item.name}>
      <Link href={item.href} target="_blank" rel="noopener noreferrer">
        <Image
          className="light cursor-pointer p-3 bg-content2"
          src={getSkillIconSrc(item.src)}
          alt={item.name}
          isZoomed
          width={60}
          shadow="sm"
        />
      </Link>
    </Tooltip>
  );
};
