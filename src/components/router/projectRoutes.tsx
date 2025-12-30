import { type PathRouteProps, Outlet } from "react-router-dom";
import { ProjectBrowser } from "../projectBrowser/ProjectBrowser";
import { ProjectView } from "../ProjectView/ProjectView";

export const projectRoutes: PathRouteProps[] = [
  {
    path: "/projects",
    element: <ProjectBrowser />,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectView />,
  },
  {
    path: "/upload/project/*",
    element: <Outlet />,
  },
];