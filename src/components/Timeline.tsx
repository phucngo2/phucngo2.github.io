import type { ExperienceItem } from "@/configs/data/experience.data";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  cn,
  Divider,
} from "@heroui/react";
import { IconPointFilled } from "@tabler/icons-react";

interface TimelineProps {
  items: ExperienceItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <ol className={cn("relative border-s-2 border-primary", className ?? "")}>
      {items.map((item, index) => (
        <li key={item.id} className="mb-6 last:mb-0 ms-6">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-4.5 -start-[7px] border border-background"></div>
          <Card className="px-2">
            <CardHeader className="flex flex-row justify-between items-start gap-4">
              <div>
                <h3 className="text-base font-semibold text-primary flex flex-row items-center gap-2">
                  {item.title}
                </h3>
                <div className="text-sm font-medium text-default-800">
                  {item.role}
                </div>
              </div>
              <div className="flex flex-row items-center justify-end mt-1 gap-3">
                <time className="text-xs font-normal leading-none text-default-700 shrink-0">
                  {item.time}
                </time>
                {index === 0 && (
                  <Chip
                    variant="flat"
                    color="success"
                    size="sm"
                    className="text-xs font-bold"
                    startContent={<IconPointFilled size={14} />}
                  >
                    Current
                  </Chip>
                )}
              </div>
            </CardHeader>
            {item.description && (
              <>
                <Divider />
                <CardBody className="text-sm/5.5 font-normal text-justify text-default-800">
                  {item.description}
                </CardBody>
              </>
            )}
            {item.technologies && (
              <>
                <Divider />
                <CardFooter className="flex flex-row flex-wrap items-center gap-2">
                  {item.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      variant="flat"
                      size="sm"
                      className="text-xs"
                    >
                      {tech}
                    </Chip>
                  ))}
                </CardFooter>
              </>
            )}
          </Card>
        </li>
      ))}
    </ol>
  );
};
