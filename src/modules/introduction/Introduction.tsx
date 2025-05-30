import MinatoAquaGif from "@/assets/introduction/minato-aqua-hololive.gif";
import { Section } from "@/components";
import { Typography } from "@/components/Typography";
import { Sections } from "@/configs";
import { Image, Link, Snippet } from "@heroui/react";

export const Introduction = () => {
  return (
    <Section id={Sections.Introduction} title="Phúc Ngô">
      <Typography>
        こんにちは！👋 Welcome to my personal profile website! 🌠
      </Typography>
      <Typography>
        I'm a developer enthusiastic about building fun applications, but life
        has me coding for food! 🌽
      </Typography>
      <Typography>
        In this space, you can find out about my{" "}
        <Link href={Sections.Introduction}>profile</Link>,{" "}
        <Link href={Sections.Experience}>professional journey</Link>,{" "}
        <Link href={Sections.Skills}>technical skills</Link>,{" "}
        <Link href={Sections.Projects}>side projects</Link>, and{" "}
        <Link href={Sections.Certification}>certifications</Link>. Take a tour
        through the various sections to get to know me better. If there is
        something specific you're interested in, please feel free to reach out.
      </Typography>
      <Typography>Enjoy exploring! 🚀</Typography>
      <Image src={MinatoAquaGif} className="w-96" isZoomed />
      <div>
        <Typography>
          I also have a deep passion for Japanese culture 🎏
        </Typography>

        <Snippet symbol="⛩️" className="w-full max-w-fit mt-3 overflow-x-auto">
          日本語は難しいですが、面白いです！
        </Snippet>
      </div>
    </Section>
  );
};
