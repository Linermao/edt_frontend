import { styled, Typography } from "@mui/material";
import { NewProjectCard } from "./createProjectsCard/NewProjectCard";
import { UploadProjectCard } from "./createProjectsCard/UploadProjectCard";
import { ShowAllProjectsCard } from "./createProjectsCard/ShowAllProjectsCard";

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
    return (
        <CreateProjectsAreaMain>
            <CreateProjectsAreaHeader>
                <Typography variant="h4"> Create a New Project </Typography>
            </CreateProjectsAreaHeader>
            <CreateProjectsAreaContent>
                <NewProjectCard key='blank-project' />
                <UploadProjectCard key='upload-project' />
                <ShowAllProjectsCard key='browse-all-project-templates' />
            </CreateProjectsAreaContent>
        </CreateProjectsAreaMain>   
    )
}