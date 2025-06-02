export interface SkillIcon {
  name: string;
  src: string;
  href: string;
}

export interface SkillRender {
  title: string;
  list?: SkillIcon[];
  children?: SkillRender[];
}

const programingLanguages = [
  {
    name: "TypeScript",
    src: "typescript/typescript-original.svg",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    src: "javascript/javascript-original.svg",
    href: "https://www.javascript.com/",
  },
  {
    name: "C HashTag",
    src: "csharp/csharp-original.svg",
    href: "https://docs.microsoft.com/dotnet/csharp/",
  },
  // {
  //   name: "Python",
  //   src: "python/python-original.svg",
  //   href: "https://www.python.org/",
  // },
  // {
  //   name: "GoLang",
  //   src: "go/go-original.svg",
  //   href: "https://golang.org/",
  // },
  // {
  //   name: "Rust",
  //   src: "rust/rust-original.svg",
  //   href: "https://www.rust-lang.org/",
  // },
  // {
  //   name: "Java",
  //   src: "java/java-original.svg",
  //   href: "https://www.java.com/",
  // },
  // {
  //   name: "C",
  //   src: "c/c-original.svg",
  //   href: "https://www.cprogramming.com/",
  // },
];

const frontendFrameworks = [
  {
    name: "React",
    src: "react/react-original.svg",
    href: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    src: "nextjs/nextjs-original.svg",
    href: "https://nextjs.org/",
  },
  {
    name: "SolidJS",
    src: "solidjs/solidjs-original.svg",
    href: "https://www.solidjs.com/",
  },
  {
    name: "Svelte",
    src: "svelte/svelte-original.svg",
    href: "https://svelte.dev/",
  },
  {
    name: "Vue.js",
    src: "vuejs/vuejs-original.svg",
    href: "https://vuejs.org/",
  },
  {
    name: "Angular",
    src: "angular/angular-original.svg",
    href: "https://angular.dev/",
  },
];

const backendFrameworks = [
  {
    name: "DotNet Core",
    src: "dotnetcore/dotnetcore-original.svg",
    href: "https://dotnet.microsoft.com/",
  },
  {
    name: "DotNet",
    src: "dot-net/dot-net-original.svg",
    href: "https://dotnet.microsoft.com/",
  },
  {
    name: "Node.js",
    src: "nodejs/nodejs-original.svg",
    href: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    src: "express/express-original.svg",
    href: "https://expressjs.com/",
  },
  {
    name: "GraphQL",
    src: "graphql/graphql-plain.svg",
    href: "https://graphql.org/",
  },
];

const mobileFrameworks = [
  {
    name: "React Native",
    src: "react/react-original.svg",
    href: "https://reactnative.dev/",
  },
];

const desktopFrameworks = [
  {
    name: "Electron",
    src: "electron/electron-original.svg",
    href: "https://www.electronjs.org/",
  },
  {
    name: "Tauri",
    src: "tauri/tauri-original.svg",
    href: "https://tauri.app/",
  },
];

const databases = [
  {
    name: "PostgreSQL",
    src: "postgresql/postgresql-original.svg",
    href: "https://www.postgresql.org/",
  },
  {
    name: "SQL Server",
    src: "microsoftsqlserver/microsoftsqlserver-plain.svg",
    href: "https://www.microsoft.com/sql-server",
  },
  {
    name: "MySQL",
    src: "mysql/mysql-original.svg",
    href: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    src: "mongodb/mongodb-original.svg",
    href: "https://www.mongodb.com/",
  },
  {
    name: "Redis",
    src: "redis/redis-original.svg",
    href: "https://redis.io/",
  },
  {
    name: "Prisma",
    src: "prisma/prisma-original.svg",
    href: "https://www.prisma.io/",
  },
];

const clouds = [
  {
    name: "Firebase",
    src: "firebase/firebase-original.svg",
    href: "https://firebase.google.com/",
  },
  {
    name: "Amazon Web Services",
    src: "amazonwebservices/amazonwebservices-original-wordmark.svg",
    href: "https://aws.amazon.com/",
  },
  {
    name: "Supabase",
    src: "supabase/supabase-original.svg",
    href: "https://supabase.com/",
  },
  {
    name: "Google Cloud",
    src: "googlecloud/googlecloud-original.svg",
    href: "https://cloud.google.com/",
  },
  {
    name: "Microsoft Azure",
    src: "azure/azure-original.svg",
    href: "https://azure.microsoft.com/",
  },
];

const others = [
  {
    name: "HTML",
    src: "html5/html5-original.svg",
    href: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    src: "css3/css3-original.svg",
    href: "https://www.w3schools.com/css/",
  },
  {
    name: "Tailwind CSS",
    src: "tailwindcss/tailwindcss-original.svg",
    href: "https://tailwindcss.com/",
  },
  {
    name: "Git",
    src: "git/git-original.svg",
    href: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    src: "github/github-original.svg",
    href: "https://github.com/",
  },
  {
    name: "GitLab",
    src: "gitlab/gitlab-original.svg",
    href: "https://gitlab.com",
  },
  {
    name: "Docker",
    src: "docker/docker-original.svg",
    href: "https://www.docker.com/",
  },
  {
    name: "Wordpress",
    src: "wordpress/wordpress-plain.svg",
    href: "https://wordpress.com/",
  },
  // {
  //   name: "Unity",
  //   src: "unity/unity-original.svg",
  //   href: "https://unity.com/",
  // },
];

export const skillsRender: SkillRender[] = [
  {
    title: "📋 Programming Languages",
    list: programingLanguages,
  },
  {
    title: "📚 Frameworks, Platforms, and Libraries",
    children: [
      { title: "📕 Front-end", list: frontendFrameworks },
      { title: "📗 Back-end", list: backendFrameworks },
      { title: "📘 Mobile", list: mobileFrameworks },
      { title: "📙 Desktop", list: desktopFrameworks },
    ],
  },
  {
    title: "💾 Databases & ORMs",
    list: databases,
  },
  { title: "☁️ Cloud & Hosting", list: clouds },
  {
    title: "🛠️ Other tools",
    list: others,
  },
];
