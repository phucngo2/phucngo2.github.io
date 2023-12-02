import { Avatar, Title } from "@mantine/core";
import { skilsRender } from "config";
import { PageContainer, PageTitle } from "shared/components";

export const SkillsContainer = () => {
  return (
    <PageContainer>
      <PageTitle />
      <div className="flex flex-col flex-1 w-full gap-8">
        {skilsRender.map((element) => (
          <div key={element.title}>
            <Title order={5} className="mb-4">
              {element.title}
            </Title>
            <div className="flex flex-row flex-wrap gap-5 sm:gap-8">
              {element.list.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Avatar
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.src}`}
                    className="rounded-none"
                    size="lg"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
