import type { ExperienceItem } from "@/configs/data/experience.data";
import { cn } from "@heroui/react";

interface TimelineProps {
  items: ExperienceItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <ol className={cn("relative border-s-2 border-primary", className ?? "")}>
      {items.map((item) => (
        <li key={item.id} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-2 -start-[7px] border border-primary"></div>
          <h3 className="text-lg font-bold text-primary">{item.title}</h3>
          <div className="font-medium">{item.role}</div>
          <time className="mb-1 text-sm font-normal leading-none text-default-700">
            {item.time}
          </time>
          <div className="mt-4 mb-4 text-base font-normal text-justify text-default-800">
            {item.description}
          </div>
        </li>
      ))}
    </ol>
  );
};
