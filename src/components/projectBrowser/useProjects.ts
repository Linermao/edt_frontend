import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useMultiToast } from "../toastProvider/MultiToast";
import type { Project } from "./useProjects.types";

const GQLGetProjects = gql`
  query GetProjects {
    projects {
      projectId
      name
    }
  }
`;

export function useProjects () {
    const { loading, error, data } = useQuery<{ projects: Project[] }>(GQLGetProjects);

    const { addErrorMessage } = useMultiToast();
    useEffect(() => {
        if (error) {
            addErrorMessage(error.message);
        }
    }, [error]);

    return { data: data?.projects ?? [], loading };
};