import DuocThienLocViet from "assets/projects/duocthienlocviet.jpeg";
import Draplus from "assets/projects/draplus.jpeg";
import YoutubeStalker from "assets/projects/youtubestalker.png";
import HocSu from "assets/projects/hocsu.png";
import Avis from "assets/projects/avis.png";
import SubtitleBurner from "assets/projects/subtitle-burner.png";
import { List } from "@mantine/core";
import {
  DotNetBadge,
  ElectronBadge,
  FastApiBadge,
  FireBaseBadge,
  MachineLearningBadge,
  ProjectItemBadge,
  ReactBadge,
  SolidjsBadge,
  TauriBadge,
} from "config/data/badges.data";

export interface ProjectItem {
  id: number;
  name: string;
  img: string;
  description: React.ReactNode;
  url: string;
  technicalStack: ProjectItemBadge[];
}

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
    description: (
      <List>
        <List.Item>
          A desktop app that allows users to download videos from YouTube
        </List.Item>
        <List.Item>Implemented FFmpeg for video and audio processing</List.Item>
      </List>
    ),
    url: "https://github.com/phucngo2/youtube-downloader/releases",
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
      "A simple desktop application for burning (hardcoding) subtitles into video",
    url: "https://github.com/phucngo2/subtitle-burner/releases",
    technicalStack: [SolidjsBadge, TauriBadge],
  },
];
