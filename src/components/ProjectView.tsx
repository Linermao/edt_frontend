import { styled } from '@mui/material';
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from 'react-resizable-panels';
import { NavigationBar } from './NavigationBar';
import { MainArea } from './ProjectView/MainArea';
import { TreeExplorers } from './ProjectView/TreeExplorers';
import { PropertyView } from './ProjectView/PropertyView';
import { useParams } from 'react-router-dom';

const ProjectViewStyled = styled('div')(() => ({  
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'min-content 1fr',
    minHeight: '100vh',
}));

const PanelResizeHandleStyled = styled(PanelResizeHandle)(({ theme }) => ({  
    display: 'grid',
    width: `0.25rem`,
    cursor: 'col-resize',
    backgroundColor: theme.palette.divider,
    borderColor: theme.palette.divider,
    borderRightStyle: 'solid',
    borderRightWidth: '1px',
}));

export function ProjectView() {
    const { projectId } = useParams<{ projectId: string }>();

    console.log(projectId);
    
    return (
        <ProjectViewStyled>
            <NavigationBar />
            <PanelGroup direction='horizontal'>
                <Panel id='left' minSize={10}>
                    <TreeExplorers />
                </Panel>
                <PanelResizeHandleStyled data-testid="left-resizer" />
                <Panel id='main' minSize={50}>
                    <MainArea />
                </Panel>
                <PanelResizeHandleStyled data-testid="right-resizer" />
                <Panel id='right' minSize={10}>
                    <PropertyView />
                </Panel>
            </PanelGroup>
        </ProjectViewStyled>
    )
}