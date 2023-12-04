import { IntroductionContent } from "modules/introduction/components";
import { PageContainer, PageTitle } from "shared/components";

export const IntroductionContainer = () => {
  return (
    <PageContainer className="gap-8">
      <PageTitle title="Phúc Ngô" />
      <IntroductionContent />
    </PageContainer>
  );
};
