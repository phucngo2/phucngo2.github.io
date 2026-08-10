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
    id: 5,
    title: "ONE Tech Stop Vietnam",
    time: "May 2026 - Now",
    role: "Software Developer",
    src: "https://ots.one-line.com/vi",
    description: (
      <div className="flex flex-col gap-1">
        <div>
          <span className="font-semibold">Business Domain:</span> Container
          Shipping
        </div>

        <div>
          <div className="font-semibold">
            Key Responsibilities & Achievements:
          </div>

          <ul className="list-disc ms-3.5">
            <li>
              Developed and maintained a design system and front-end component
              library, providing reusable, consistent, and accessible UI
              components across multiple applications.
            </li>
            <li>
              Designed and implemented flexible component APIs, patterns, and
              documentation to improve development efficiency, consistency, and
              maintainability across products.
            </li>
            <li>
              Built and maintained an MCP server and AI skill that enable
              AI-assisted discovery, usage, and generation of design system
              components and patterns, reducing development time across products
              by up to 50%.
            </li>
            <li>
              Established best practices and standards for component
              development, accessibility, responsive design, and visual
              consistency across the organization.
            </li>
            <li>
              Improved developer experience through tooling, documentation,
              automation, and continuous enhancements to the design system,
              reducing duplicated effort and accelerating feature development.
            </li>
            <li>
              Maintained the reliability and quality of the design system
              through testing, defect resolution, refactoring, version
              management, and peer reviews.
            </li>
          </ul>
        </div>

        <div>
          <span className="font-semibold">Technologies:</span> React, Next.js,
          Node.js, Google Cloud Platform
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "PTN Global Corp",
    time: "February 2023 - May 2026",
    role: "Software Engineer",
    src: "https://www.ptnglobalcorp.com/",
    description: (
      <div className="flex flex-col gap-1">
        <div>
          <span className="font-semibold">Business Domain:</span> Interpreting
          and Language Services, Finance, and Healthcare
        </div>

        <div>
          <div className="font-semibold">
            Key Responsibilities & Achievements:
          </div>

          <ul className="list-disc ms-3.5">
            <li>
              Developed multiple applications across multiple platforms,
              including web, mobile, and desktop.
            </li>
            <li>
              Designed and implemented responsive and modern UIs, achieving 90+
              Google Lighthouse scores for performance, accessibility, and SEO.
            </li>
            <li>
              Built scalable back-end services and RESTful APIs, enabling
              seamless data exchange and supporting high concurrency usage with
              improved system reliability.
            </li>
            <li>
              Maintained clean, efficient, and maintainable codebases by
              resolving defects, refactoring components, and optimizing
              architecture, resulting in the reduction in production issues and
              enhanced long-term stability.
            </li>
            <li>
              Collaborated with cross-functional stakeholders to translate
              business and regulatory requirements into technical solutions.
            </li>
            <li>
              Supported team members through knowledge sharing, technical
              guidance, and peer code reviews, improving code quality and
              development consistency.
            </li>
          </ul>
        </div>

        <div>
          <span className="font-semibold">Technologies:</span> React, Next.js,
          Node.js, DotNet, Vue.js, React Native, Wordpress, PostgreSQL, SQL
          Server, Sencha Ext JS
        </div>
      </div>
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
      <div className="flex flex-col gap-1">
        <div>
          <span className="font-semibold">Business Domain:</span> Education
        </div>

        <ul className="list-disc ms-3.5">
          <li>
            Developed a user-friendly interface with React for an Internship
            Trainee Management System.
          </li>
          <li>Trained in React, DotNet, RESTful API</li>
        </ul>
      </div>
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
