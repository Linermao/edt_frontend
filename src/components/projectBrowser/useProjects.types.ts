export interface UseProjectsValue {
  data: GQLGetProjectsQueryData | undefined;
  loading: boolean;
}

export interface GQLGetProjectsQueryVariables {
  after: string | null;
  before: string | null;
  first: number | null;
  last: number | null;
  filter: null;
}

export interface GQLStringFilterOperation {
  contains?: string;
}

export interface GQLGetProjectsQueryData {
  viewer: GQLViewer;
}

export interface GQLViewer {
  projects: GQLViewerProjectConnection;
}

export interface GQLViewerProjectConnection {
  edges: GQLViewerProjectEdge[];
  pageInfo: GQLPageInfo;
}

export interface GQLViewerProjectEdge {
  node: GQLProject;
  cursor: string;
}

export interface GQLProject {
  id: string;
  name: string;
  capabilities: GQLProjectCapabilities;
}

export interface GQLProjectCapabilities {
  canDownload: boolean;
  canRename: boolean;
  canDelete: boolean;
  canDuplicate: boolean;
}

export interface GQLPageInfo {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
  count: number;
}
