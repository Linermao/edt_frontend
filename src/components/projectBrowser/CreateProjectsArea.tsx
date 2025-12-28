import { styled, Typography } from "@mui/material";
import { useProjectTemplates } from "./useProjectTemplate";
import { ProjectTemplateContext } from "./useProjectTemplate.types";
import { NewProjectCard } from "./createProjectsCard/NewProjectCard";
import { UploadProjectCard } from "./createProjectsCard/UploadProjectCard";
import { ShowAllProjectsCard } from "./createProjectsCard/ShowAllProjectsCard";
import { TemplateCard } from "./createProjectsCard/TemplateCard";

const CreateProjectsAreaMain = styled('main')(({ theme }) => ({  
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
}));

const CreateProjectsAreaHeader = styled('div')(() => ({  
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const CreateProjectsAreaContent = styled('div')(({ theme }) => ({  
    display: 'grid',
    gap: theme.spacing(1),
    gridTemplateColumns: 'repeat(6, 1fr)',
}));

export function CreateProjectsArea() {
    // TODO: page, limit number
    const { data } = useProjectTemplates(0, 6, ProjectTemplateContext.PROJECT_BROWSER)
    const templates = data?.viewer.projectTemplates.edges.map((edge) => edge.node);
    
    return (
        <CreateProjectsAreaMain>
            <CreateProjectsAreaHeader>
                <Typography variant="h4"> Create a New Project </Typography>
            </CreateProjectsAreaHeader>
            <CreateProjectsAreaContent>
                {templates?.map((template) =>
                    template.id === 'blank-project' ? (
                    <NewProjectCard key={template.id} />
                    ) : template.id === 'upload-project' ? (
                    <UploadProjectCard key={template.id} />
                    ) : template.id === 'browse-all-project-templates' ? (
                    <ShowAllProjectsCard key={template.id} />
                    ) : (
                        <TemplateCard 
                            key={template.id} 
                            template={template}
                        />
                    )
                )}
            </CreateProjectsAreaContent>
        </CreateProjectsAreaMain>   
    )
}