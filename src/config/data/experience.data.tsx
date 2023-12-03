import { List } from "@mantine/core";

export interface ExperienceItem {
  id: number;
  name: string;
  time: string;
  role: string;
  src: string;
  description?: React.ReactNode;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    name: "FPT University Can Tho",
    time: "September 2019 - December 2022",
    role: "Bachelor Degree",
    src: "https://cantho.fpt.edu.vn/",
  },
  {
    id: 2,
    name: "FPT Software Ho Chi Minh",
    time: "September 2021 - December 2021",
    role: "Software Engineer Intern",
    src: "https://fptsoftware.com/",
    description: (
      <List>
        <List.Item mt={6}>
          Developed an interactive user interface using React to build an
          Internship Trainee Management System
        </List.Item>
        <List.Item>Trained in React, DotNet, RESTful API</List.Item>
      </List>
    ),
  },
  // {
  //   id: 3,
  //   name: "DXT Technology",
  //   time: "August 2022 - September 2022",
  //   role: "Software Engineer",
  //   src: "#",
  //   description: (
  //     <List>
  //       <List.Item mt={6}>
  //         Managed the ongoing maintenance and support of e-commerce websites
  //         developed with ASP.NET Web Forms and the IIS server configuration
  //       </List.Item>
  //     </List>
  //   ),
  // },
  {
    id: 4,
    name: "PTN Global Corp",
    time: "February 2023 - Now",
    role: "Software Engineer",
    src: "https://www.ptnglobalcorp.com/",
    description: (
      <List>
        <List.Item mt={6}>
          Collaborated closely with team members to implement various features,
          ensuring the continuous maintenance and enhancement of software
          applications
        </List.Item>
        <List.Item>
          Contributed to the development of key features, with a notable on
          video rendering and subtitle editing functionality
        </List.Item>
        <List.Item>
          Worked across diverse technologies, including React, React Native,
          APS.NET, Wordpress, Sencha Ext JS
        </List.Item>
      </List>
    ),
  },
];
