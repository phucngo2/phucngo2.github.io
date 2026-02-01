import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMoodSmile,
} from "@tabler/icons-react";

export interface ContactItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

export const contacts = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <IconBrandLinkedin size={20} />,
    href: "https://www.linkedin.com/in/phucnnh21/",
    color: "#0077B5",
  },
  {
    id: 2,
    name: "GitHub",
    icon: <IconBrandGithub size={20} />,
    href: "https://github.com/phucngo2/",
    color: "#f0f6fc",
  },
  {
    id: 3,
    name: "YouTube",
    icon: <IconBrandYoutube size={20} />,
    href: "https://www.youtube.com/@NgoBap",
    color: "#FF0000",
  },
  {
    id: 4,
    name: "Rick Roll",
    icon: <IconMoodSmile size={20} />,
    href: "https://youtu.be/dQw4w9WgXcQ",
    color: "#08851b",
  },
];
