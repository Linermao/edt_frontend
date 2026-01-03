import { type PathRouteProps, Outlet } from "react-router-dom";
import { ProjectBrowser } from "../ProjectBrowser";
import { ProjectView } from "../ProjectView";

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