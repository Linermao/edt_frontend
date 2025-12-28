import { type PathRouteProps, Outlet } from "react-router-dom";
import { ProjectBrowser } from "../projectBrowser/ProjectBrowser";

export const projectRoutes: PathRouteProps[] = [
  {
    path: "/projects",
    element: <ProjectBrowser />,
  },
  {
    path: "/upload/project/*",
    element: <Outlet />,
  },
];