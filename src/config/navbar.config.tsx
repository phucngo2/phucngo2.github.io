import {
  IconDefinition,
  faBook,
  faClockRotateLeft,
  faTasks,
  faUser,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import {
  CERTIFICATION_ROUTE,
  EXPERIENCE_ROUTE,
  HOME_ROUTE,
  PROJECTS_ROUTE,
  SKILLS_ROUTE,
} from "./routes.config";

export interface NavbarPageItem {
  name: string;
  path: string;
  icon: IconDefinition;
}

export const pageList = [
  {
    name: "Profile",
    path: HOME_ROUTE,
    icon: faUser,
  },
  {
    name: "Experience",
    path: EXPERIENCE_ROUTE,
    icon: faClockRotateLeft,
  },
  {
    name: "Technical Skills",
    path: SKILLS_ROUTE,
    icon: faWrench,
  },
  {
    name: "Projects",
    path: PROJECTS_ROUTE,
    icon: faTasks,
  },
  {
    name: "Certification",
    path: CERTIFICATION_ROUTE,
    icon: faBook,
  },
];
