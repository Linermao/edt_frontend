import { Box, Button, CircularProgress, styled } from "@mui/material";
import { CreateProjectsCard } from "./CreateProjectsCard";
import type { GQLProjectTemplate } from "../useProjectTemplate.types";

type ProjectTemplateCardProps = {
  template: GQLProjectTemplate;
}

const StyledButton = styled(Button)(() => ({
  padding: 0,
  margin: 0,
}));

const ContentWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export function TemplateCard({ template }: ProjectTemplateCardProps) {
    // TOOD: use globally
    const httpOrigin = "http://localhost:8080"
    console.log('Full URL', httpOrigin + template.imageURL);

    return (
        <StyledButton>
            <CreateProjectsCard title={template.label} description={template.label}>
                <ContentWrapper>
                  {template ? (
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url('${httpOrigin + template.imageURL}')`,
                        backgroundSize: 'cover',
                      }} 
                    />
                  ) : (
                    <CircularProgress />
                  )}
                </ContentWrapper>
            </CreateProjectsCard>
        </StyledButton>
    )
}