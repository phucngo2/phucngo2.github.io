import Avis from "@/assets/projects/avis.png";
import Draplus from "@/assets/projects/draplus.jpeg";
import HocSu from "@/assets/projects/hocsu.png";
import Minesweeper from "@/assets/projects/mine-sweeper.jpeg";
import SubtitleBurner from "@/assets/projects/subtitle-burner.png";
import YoutubeStalker from "@/assets/projects/youtubestalker.png";
import {
  DotNetBadge,
  ElectronBadge,
  FastApiBadge,
  FireBaseBadge,
  MachineLearningBadge,
  ReactBadge,
  SolidjsBadge,
  TauriBadge,
  type ProjectItemBadge,
} from "./badges.data";

export interface ProjectItem {
  id: number;
  name: string;
  img: string;
  description: React.ReactNode;
  url: string;
  technicalStack: ProjectItemBadge[];
}

export const projectsData: ProjectItem[] = [
  // {
  //   id: 1,
  //   name: "Dược Thiên Lộc Việt",
  //   img: DuocThienLocViet,
  //   description:
  //     "An e-commerce website to assist a pharmacy store during COVID-19",
  //   url: "https://duocthienlocviet.com",
  //   technicalStack: [ReactBadge, DotNetBadge],
  // },
  {
    id: 2,
    name: "Draplus",
    img: Draplus,
    description:
      "🎨 A real-time drawing web application, where people can concurrently sketch and share ideas",
    url: "https://draplus.netlify.app/",
    technicalStack: [ReactBadge, DotNetBadge],
  },
  {
    id: 3,
    name: "YouTube Downloader",
    img: YoutubeStalker,
    description: (
      <ul>
        <li>
          A desktop app that allows users to download videos from YouTube ▶️
        </li>
        <li>Implemented FFmpeg for video and audio processing</li>
      </ul>
    ),
    url: "https://github.com/phucngo2/youtube-downloader/releases",
    technicalStack: [ReactBadge, ElectronBadge],
  },
  {
    id: 4,
    name: "Học Sử",
    img: HocSu,
    description:
      "🎓 A history learning website that assists Vietnamese educators in their teaching",
    url: "https://hocsu.netlify.app/",
    technicalStack: [ReactBadge, FireBaseBadge],
  },
  {
    id: 5,
    name: "Avis",
    img: Avis,
    description:
      "College capstone project: Machine learning implementation to search for songs by humming 🎵",
    url: "https://avisapp.netlify.app/",
    technicalStack: [
      ReactBadge,
      DotNetBadge,
      FastApiBadge,
      MachineLearningBadge,
    ],
  },
  {
    id: 6,
    name: "Subtitle Burner",
    img: SubtitleBurner,
    description:
      "🔥 A simple desktop application for burning (hardcoding) subtitles into video",
    url: "https://github.com/phucngo2/subtitle-burner/releases",
    technicalStack: [SolidjsBadge, TauriBadge],
  },
  {
    id: 7,
    name: "React Minesweeper",
    img: Minesweeper,
    description: "💣 A Minesweeper game built with React",
    url: "https://phucngo2.github.io/react-minesweeper/",
    technicalStack: [ReactBadge],
  },
];
