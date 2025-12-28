import { gql, useQuery } from "@apollo/client";
import type { GQLGetProjectsQueryData, GQLGetProjectsQueryVariables, UseProjectsValue } from "./useProjects.types";
import { useEffect } from "react";
import { useMultiToast } from "../toastProvider/MultiToast";

const getProjectsQuery = gql`
    query getProjects($after: String, $before: String, $first: Int, $last: Int, $filter: ProjectFilter) {
        viewer {
            ...ViewerProjects
        }
    }
`;

export function useProjects (): UseProjectsValue {

    const variables: GQLGetProjectsQueryVariables = {
        after: null,
        before: null,
        first: 20,
        last: null,
        filter: null,
    };

    const {
        data: projectData,
        loading,
        error,
    } = useQuery<GQLGetProjectsQueryData, GQLGetProjectsQueryVariables>(
        getProjectsQuery, 
        { variables }
    );

    const { addErrorMessage } = useMultiToast();
    useEffect(() => {
        if (error) {
            addErrorMessage(error.message);
        }
    }, [error]);

    return { data: projectData, loading };
};