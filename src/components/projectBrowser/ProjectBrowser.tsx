import { Container, Grid, styled } from "@mui/material";
import { Footer } from "../footer/Footer";
import { NavigationBar } from "../navigationBar/NavigationBar";
import { CreateProjectsArea } from "./CreateProjectsArea";
import { ListProjectsArea } from "./ListProjectsArea";

const ProjectBrowserView = styled('div')(() => ({  
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'min-content 1fr min-content',
    minHeight: '100vh',
}));

const ProjectBrowserMain = styled('main')(({ theme }) => ({  
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
}));

export function ProjectBrowser() {
    return (
        <ProjectBrowserView>
            <NavigationBar />
            <Container maxWidth="xl">
                <Grid container justifyContent="center">
                    <Grid size={{ xs: 8 }}>
                        <ProjectBrowserMain>
                            <CreateProjectsArea />
                            <ListProjectsArea />
                        </ProjectBrowserMain>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </ProjectBrowserView>
    )
}