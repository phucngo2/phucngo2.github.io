import { certificationData } from "config/data/certification.data";
import { CertificationCard } from "modules/certification/components";
import { PageContainer, PageTitle } from "shared/components";

export const CertificationContainer = () => {
  return (
    <PageContainer className="gap-8">
      <PageTitle />
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificationData.map((item) => (
          <CertificationCard key={item.name} item={item} />
        ))}
      </div>
    </PageContainer>
  );
};
