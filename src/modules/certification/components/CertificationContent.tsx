import { certificationData } from "config";
import { CertificationCard } from "modules/certification/components";
import { twClassNames } from "utils";

interface CertificationContentProps {
  className?: string;
}

export const CertificationContent: React.FC<CertificationContentProps> = ({
  className,
}) => {
  return (
    <div
      className={twClassNames(
        "grid w-full grid-cols-1 gap-8 lg:grid-cols-3",
        className ?? ""
      )}
    >
      {certificationData.map((item) => (
        <CertificationCard key={item.name} item={item} />
      ))}
    </div>
  );
};
