import DuocThienLocViet from "assets/projects/duocthienlocviet.jpeg";
import Draplus from "assets/projects/draplus.jpeg";
import YoutubeStalker from "assets/projects/youtubestalker.png";
import HocSu from "assets/projects/hocsu.png";
import Avis from "assets/projects/avis.png";

export interface ProjectItem {
  id: number;
  name: string;
  img: string;
  description: React.ReactNode;
  url: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    name: "Dược Thiên Lộc Việt",
    img: DuocThienLocViet,
    description: "Duoc Thien Loc Viet. A pharmacy e-commerce website.",
    url: "https://duocthienlocviet.com",
  },
  {
    id: 2,
    name: "Draplus",
    img: Draplus,
    description: "Draplus. A real-time drawing web application.",
    url: "https://draplus.netlify.app/",
  },
  {
    id: 3,
    name: "Youtube Stalker",
    img: YoutubeStalker,
    description:
      "Youtube Stalker. An electron app that allow user to convert and download video from Youtube.",
    url: "https://github.com/phucnnh21/electron-youtube-downloader/releases",
  },
  {
    id: 4,
    name: "Học Sử",
    img: HocSu,
    description: "Hoc Su. A history learning website for Vietnamese teachers.",
    url: "https://hocsu.netlify.app/",
  },
  {
    id: 5,
    name: "Avis",
    img: Avis,
    description:
      "Avis. Machine learning implementation to search for songs by humming.",
    url: "https://avisapp.netlify.app/",
  },
];
