import { gql } from "@apollo/client";

export const ViewerFragment = gql`
  fragment ViewerFragment on Viewer {
    capabilities {
      projects {
        canList
        canCreate
        canUpload
      }
      libraries {
        canList
      }
    }
  }
`;

export const ViewerProjectsFragment = gql`
  fragment ViewerProjects on Viewer {
    projects(after: $after, before: $before, first: $first, last: $last, filter: $filter) {
      edges {
        node {
          ...Project
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
        count
      }
    }
  }
`;

export const ProjectFragment = gql`
  fragment Project on Project {
    id
    name
    capabilities {
      canDownload
      canRename
      canDelete
      canDuplicate
    }
  }
`;