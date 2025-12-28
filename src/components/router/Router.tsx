import { Route, Routes, useRouteError } from "react-router-dom";
import { ErrorPage } from "../errorPage/ErrorPage";
import { projectRoutes } from "./projectRoutes";

const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  return <p>An error has occurred, please contact your administrator or refresh the page...</p>;
};

export function Router() {
    return (
        <Routes>
            <Route path="/errors/:code" element={<ErrorPage />} />
            {projectRoutes.map((props, index) => (
                <Route key={index} {...props} ErrorBoundary={ErrorBoundary} />
            ))}
        </Routes>
    )
}