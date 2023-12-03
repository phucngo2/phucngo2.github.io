import DuocThienLocViet from "assets/projects/duocthienlocviet.jpeg";
import Draplus from "assets/projects/draplus.jpeg";
import YoutubeStalker from "assets/projects/youtubestalker.png";
import HocSu from "assets/projects/hocsu.png";
import Avis from "assets/projects/avis.png";

export interface ProjectItemBadge {
  title: string;
  color: string;
}

export interface ProjectItem {
  id: number;
  name: string;
  img: string;
  description: React.ReactNode;
  url: string;
  technicalStack: ProjectItemBadge[];
}

const ReactBadge: ProjectItemBadge = {
  title: "React",
  color: "blue",
};
const DotNetBadge: ProjectItemBadge = {
  title: "DotNet",
  color: "grape",
};
const ElectronBadge: ProjectItemBadge = {
  title: "Electron",
  color: "gray",
};
const FireBaseBadge: ProjectItemBadge = {
  title: "Firebase",
  color: "yellow",
};
const FastApiBadge: ProjectItemBadge = {
  title: "FastAPI",
  color: "teal",
};

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    name: "Dược Thiên Lộc Việt",
    img: DuocThienLocViet,
    description:
      "An e-commerce website to assist a pharmacy store during COVID-19",
    url: "https://duocthienlocviet.com",
    technicalStack: [ReactBadge, DotNetBadge],
  },
  {
    id: 2,
    name: "Draplus",
    img: Draplus,
    description:
      "A real-time drawing web application, where people can concurrently sketch and share ideas",
    url: "https://draplus.netlify.app/",
    technicalStack: [ReactBadge, DotNetBadge],
  },
  {
    id: 3,
    name: "YouTube Downloader",
    img: YoutubeStalker,
    description:
      "A desktop app that allows users to download videos from YouTube and use FFmpeg to convert video",
    url: "https://github.com/phucnnh21/electron-youtube-downloader/releases",
    technicalStack: [ReactBadge, ElectronBadge],
  },
  {
    id: 4,
    name: "Học Sử",
    img: HocSu,
    description:
      "A history learning website that assists Vietnamese educators in their teaching",
    url: "https://hocsu.netlify.app/",
    technicalStack: [ReactBadge, FireBaseBadge],
  },
  {
    id: 5,
    name: "Avis",
    img: Avis,
    description:
      "College capstone project: Machine learning implementation to search for songs by humming",
    url: "https://avisapp.netlify.app/",
    technicalStack: [ReactBadge, DotNetBadge, FastApiBadge],
  },
];
