import Paper from "pages/Paper";
import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "shared/components/Layout/AppLayout";
import {
  CERTIFICATION_ROUTE,
  EXPERIENCE_ROUTE,
  HOME_ROUTE,
  PAPER_ROUTE,
  PROJECTS_ROUTE,
  SKILLS_ROUTE,
} from "./routes.config";
const Introduction = React.lazy(() => import("pages/Introduction"));
const Experience = React.lazy(() => import("pages/Experience"));
const Skills = React.lazy(() => import("pages/Skills"));
const Projects = React.lazy(() => import("pages/Projects"));
const Certification = React.lazy(() => import("pages/Certification"));

const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: HOME_ROUTE,
        element: <Introduction />,
      },
      {
        path: EXPERIENCE_ROUTE,
        element: <Experience />,
      },
      {
        path: SKILLS_ROUTE,
        element: <Skills />,
      },
      {
        path: PROJECTS_ROUTE,
        element: <Projects />,
      },
      {
        path: CERTIFICATION_ROUTE,
        element: <Certification />,
      },
    ],
  },
  {
    path: PAPER_ROUTE,
    element: <Paper />,
  },
  {
    path: "*",
    element: <Navigate to={HOME_ROUTE} />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={appRouter} />;
};
