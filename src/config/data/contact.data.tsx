import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface ContactItem {
  name: string;
  icon: IconDefinition;
  href: string;
  color: string;
}

export const contacts = [
  {
    name: "LinkedIn",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/phucnnh21/",
    color: "#0077B5",
  },
  {
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/phucnnh21/",
    color: "#f0f6fc",
  },
  {
    name: "Gmail",
    icon: faEnvelope,
    href: "https://github.com/phucnnh21/",
    color: "#08851b",
  },
  {
    name: "YouTube",
    icon: faYoutube,
    href: "https://www.youtube.com/@NgoBap",
    color: "#FF0000",
  },
];
