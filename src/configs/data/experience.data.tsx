export interface ExperienceItem {
  id: number;
  title: string;
  time: string;
  role: string;
  src: string;
  description?: React.ReactNode;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 4,
    title: "PTN Global Corp",
    time: "February 2023 - Now",
    role: "Software Engineer",
    src: "https://www.ptnglobalcorp.com/",
    description: (
      <ul className="list-disc ms-3.5">
        <li>
          <span className="font-semibold">Business domain:</span> Interpreting
          and Language Services, Finance, and Healthcare
        </li>
        <li>
          Collaborated closely with team members to implement various features,
          ensuring the continuous maintenance and enhancement of software
          applications
        </li>
        <li>
          Contributed to the development of key features, with a notable on
          video rendering and subtitle editing functionality
        </li>
        <li>
          Worked across diverse technologies, including React, React Native,
          Vue.js, Angular, APS.NET, WPF, Wordpress, Sencha Ext JS
        </li>
      </ul>
    ),
  },
  // {
  //   id: 3,
  //   name: "DXT Technology",
  //   time: "August 2022 - September 2022",
  //   role: "Software Engineer",
  //   src: "#",
  //   description: (
  //     <ul className="list-disc ms-3.5">
  //       <li>
  //         Managed the ongoing maintenance and support of e-commerce websites
  //         developed with ASP.NET Web Forms and the IIS server configuration
  //       </li>
  //     </ul>
  //   ),
  // },
  {
    id: 2,
    title: "FPT Software Ho Chi Minh",
    time: "September 2021 - December 2021",
    role: "Software Engineer Intern",
    src: "https://fptsoftware.com/",
    description: (
      <ul className="list-disc ms-3.5">
        <li>
          <span className="font-semibold">Business domain:</span> Education
        </li>
        <li>
          Developed a user-friendly interface with React for an Internship
          Trainee Management System.
        </li>
        <li>Trained in React, DotNet, RESTful API</li>
      </ul>
    ),
  },
  {
    id: 1,
    title: "FPT University Can Tho",
    time: "September 2019 - December 2022",
    role: "Bachelor of Software Engineering",
    src: "https://cantho.fpt.edu.vn/",
  },
];
