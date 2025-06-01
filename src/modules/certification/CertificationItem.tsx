import type { CertificationItem as ICertificationItem } from "@/configs/data/certification.data";
import { Button, Card, CardFooter, cn, Image, Link } from "@heroui/react";

interface CertificationItemProps {
  item: ICertificationItem;
}

export const CertificationItem: React.FC<CertificationItemProps> = ({
  item,
}) => {
  return (
    <Card
      isFooterBlurred
      className="cursor-pointer"
      as={Link}
      href={item.src}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src={item.img}
        isZoomed
      />
      <CardFooter className="justify-between gap-2 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div
          className={cn("font-semibold truncate", item.titleClassName ?? "")}
        >
          {item.name}
        </div>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="full"
          size="sm"
          variant="flat"
        >
          View more
        </Button>
      </CardFooter>
    </Card>
  );
};
