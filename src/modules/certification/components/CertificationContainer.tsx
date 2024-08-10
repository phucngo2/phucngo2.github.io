import { CertificationContent } from "modules/certification/components";
import { PageContainer, PageTitle } from "shared/components";

export const CertificationContainer = () => {
  return (
    <PageContainer className="gap-8">
      <PageTitle />
      <CertificationContent />
    </PageContainer>
  );
};
