import type { SkillRender } from "@/configs/data";
import { Card, CardBody, cn } from "@heroui/react";
import { SkillsIcon } from "./SkillsIcon";

interface SkillsGroupProps {
  item: SkillRender;
  className?: string;
  titleClassName?: string;
}

export const SkillsGroup: React.FC<SkillsGroupProps> = ({
  item,
  className,
  titleClassName,
}) => {
  return (
    <div className={cn("flex flex-col gap-3", className ?? "")}>
      <h3 className={cn("font-semibold text-2xl", titleClassName ?? "")}>
        {item.title}
      </h3>
      {item.children ? (
        item.children.map((child) => (
          <SkillsGroup
            key={child.title}
            item={child}
            className="my-1.5"
            titleClassName="text-xl"
          />
        ))
      ) : (
        <Card className="w-full bg-content2">
          <CardBody className="flex flex-row items-center justify-evenly sm:justify-start flex-wrap gap-4">
            {item.list?.map((skill) => (
              <SkillsIcon key={skill.name} item={skill} />
            ))}
          </CardBody>
        </Card>
      )}
    </div>
  );
};
