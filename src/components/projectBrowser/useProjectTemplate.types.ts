export interface UseProjectTemplatesValue {
  data: GQLProjectTemplatesData | undefined;
  loading: boolean;
}

export interface GQLProjectTemplatesVariables {
  page: number;
  limit: number;
  context: ProjectTemplateContext;
}

export const ProjectTemplateContext = {
  PROJECT_BROWSER: 'PROJECT_BROWSER',
  PROJECT_TEMPLATE_MODAL: 'PROJECT_TEMPLATE_MODAL',
} as const;

export type ProjectTemplateContext = typeof ProjectTemplateContext[keyof typeof ProjectTemplateContext];

export interface GQLProjectTemplatesData {
  viewer: GQLViewer;
}

export interface GQLViewer {
  projectTemplates: GQLViewerProjectTemplateConnection;
}

export interface GQLViewerProjectTemplateConnection {
  edges: GQLViewerProjectTemplateEdge[];
  pageInfo: GQLPageInfo;
}

export interface GQLViewerProjectTemplateEdge {
  node: GQLProjectTemplate;
}

export interface GQLProjectTemplate {
  id: string;
  label: string;
  imageURL: string;
  natures: string[];
}

export interface GQLPageInfo {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  count: number;
}
