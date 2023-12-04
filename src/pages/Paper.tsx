import { ScrollArea } from "@mantine/core";
import { PaperContainer } from "modules/paper/components";

const Paper = () => {
  return (
    <ScrollArea offsetScrollbars className="w-[100dvw] h-[100dvh]">
      <div className="flex flex-col items-center w-full px-8">
        <PaperContainer />
      </div>
    </ScrollArea>
  );
};

export default Paper;
