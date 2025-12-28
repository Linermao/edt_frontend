import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useMultiToast } from "../toastProvider/MultiToast";
import type { GQLProjectTemplatesData, GQLProjectTemplatesVariables, ProjectTemplateContext, UseProjectTemplatesValue } from "./useProjectTemplate.types";

const getProjectTemplatesQuery = gql`
  query getProjectTemplates($page: Int!, $limit: Int!, $context: ProjectTemplateContext!) {
    viewer {
      projectTemplates(page: $page, limit: $limit, context: $context) {
        edges {
          node {
            id
            label
            imageURL
          }
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          count
        }
      }
    }
  }
`;

export const useProjectTemplates = (
  page: number,
  limit: number,
  context: ProjectTemplateContext,
  skip?: boolean
): UseProjectTemplatesValue => {
  const variables: GQLProjectTemplatesVariables = {
    page,
    limit,
    context,
  };
  const { data, loading, error } = useQuery<GQLProjectTemplatesData, GQLProjectTemplatesVariables>(
    getProjectTemplatesQuery,
    { variables, skip }
  );

  const { addErrorMessage } = useMultiToast();
  useEffect(() => {
    if (error) {
      addErrorMessage(error.message);
    }
  }, [error]);

  return {
    data,
    loading,
  };
};