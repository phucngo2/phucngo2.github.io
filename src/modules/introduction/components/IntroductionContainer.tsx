import { Image } from "@mantine/core";
import MinatoAquaGif from "assets/profile/minato-aqua-hololive.gif";
import {
  CERTIFICATION_ROUTES,
  EXPERIENCE_ROUTE,
  HOME_ROUTE,
  PROJECTS_ROUTE,
  SKILLS_ROUTE,
} from "config";
import {
  IntroductionAnchor,
  IntroductionText,
} from "modules/introduction/components";
import { PageContainer, PageTitle } from "shared/components";

export const IntroductionContainer = () => {
  return (
    <PageContainer className="gap-8">
      <PageTitle title="Phúc Ngô" />
      <IntroductionText>
        こんにちは！👋 Welcome to my personal profile website! 🌠
      </IntroductionText>
      <IntroductionText>
        In this space, you can find out about my{" "}
        <IntroductionAnchor href={HOME_ROUTE}>profile</IntroductionAnchor>,{" "}
        <IntroductionAnchor href={EXPERIENCE_ROUTE}>
          professional journey
        </IntroductionAnchor>
        ,{" "}
        <IntroductionAnchor href={SKILLS_ROUTE}>
          technical skills
        </IntroductionAnchor>
        ,{" "}
        <IntroductionAnchor href={PROJECTS_ROUTE}>
          side projects
        </IntroductionAnchor>
        , and{" "}
        <IntroductionAnchor href={CERTIFICATION_ROUTES}>
          certifications
        </IntroductionAnchor>
        . Take a tour through the various sections to get to know me better. If
        there is something specific you're interested in, please feel free to
        reach out.
      </IntroductionText>
      <IntroductionText>Enjoy exploring! 🚀</IntroductionText>
      <Image src={MinatoAquaGif} w={360} maw="100%" />
      <IntroductionText>
        「日本語は難しいですが、面白いです！」 🤡
      </IntroductionText>
    </PageContainer>
  );
};
