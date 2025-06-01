import { Section } from "@/components";
import { Sections } from "@/configs";
import { certificationData } from "@/configs/data/certification.data";
import { CertificationItem } from "./CertificationItem";

export const Certification = () => {
  return (
    <Section id={Sections.Certification} title="Certification">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificationData.map((item) => (
          <CertificationItem key={item.name} item={item} />
        ))}
      </div>
    </Section>
  );
};
