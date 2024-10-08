export interface SkillIcon {
  name: string;
  src: string;
  href: string;
}

export interface SkillRender {
  title: string;
  list: SkillIcon[];
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
    href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  // {
  //   name: "Python",
  //   src: "python/python-original-wordmark.svg",
  //   href: "https://www.python.org/",
  // },
  // {
  //   name: "GoLang",
  //   src: "go/go-original.svg",
  //   href: "https://golang.org/",
  // },
  // {
  //   name: "Java",
  //   src: "java/java-original-wordmark.svg",
  //   href: "https://www.java.com/en/",
  // },
  // {
  //     name: "C",
  //     src: "c/c-original.svg",
  //     href: "https://www.cprogramming.com/",
  // },
];

const librariesAndFramworks = [
  {
    name: "React",
    src: "react/react-original.svg",
    href: "https://reactjs.org/",
  },
  {
    name: "DotNet",
    src: "dotnetcore/dotnetcore-original.svg",
    href: "https://dotnet.microsoft.com/",
  },
  {
    name: "Express",
    src: "express/express-original.svg",
    href: "https://expressjs.com/",
  },
  {
    name: "GraphQL",
    src: "graphql/graphql-plain.svg",
    href: "https://graphql.org/",
  },
  {
    name: "Electron",
    src: "electron/electron-original.svg",
    href: "https://www.electronjs.org/",
  },
  // {
  //     name: "Bootstrap",
  //     src: "bootstrap/bootstrap-plain.svg",
  //     href: "https://getbootstrap.com/",
  // },
  // {
  //     name: "TailwindCSS",
  //     src: "tailwindcss/tailwindcss-plain.svg",
  //     href: "https://tailwindcss.com/",
  // },
  // {
  //   name: "Svelte",
  //   src: "svelte/svelte-original.svg",
  //   href: "https://svelte.dev/",
  // },
];

const databases = [
  {
    name: "MongoDB",
    src: "mongodb/mongodb-original.svg",
    href: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    src: "postgresql/postgresql-original.svg",
    href: "https://www.postgresql.org/",
  },
  {
    name: "SQL Server",
    src: "microsoftsqlserver/microsoftsqlserver-plain.svg",
    href: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
  },
  {
    name: "MySQL",
    src: "mysql/mysql-original.svg",
    href: "https://www.mysql.com/",
  },
  {
    name: "Redis",
    src: "redis/redis-original.svg",
    href: "https://redis.io/",
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
    name: "NodeJS",
    src: "nodejs/nodejs-original.svg",
    href: "https://nodejs.org/en/",
  },
  {
    name: "Git",
    src: "git/git-original.svg",
    href: "https://git-scm.com/",
  },
  {
    name: "Docker",
    src: "docker/docker-original.svg",
    href: "https://www.docker.com/",
  },
  {
    name: "Firebase",
    src: "firebase/firebase-plain.svg",
    href: "https://firebase.google.com/",
  },
  {
    name: "Wordpress",
    src: "wordpress/wordpress-original.svg",
    href: "https://www.docker.com/",
  },
  // {
  //     name: "Unity",
  //     src: "unity/unity-original.svg",
  //     href: "https://unity.com/",
  // },
];

export const skillsRender: SkillRender[] = [
  {
    title: "Programming Languages",
    list: programingLanguages,
  },
  {
    title: "Libraries and Frameworks",
    list: librariesAndFramworks,
  },
  {
    title: "Databases",
    list: databases,
  },
  {
    title: "Others",
    list: others,
  },
];
