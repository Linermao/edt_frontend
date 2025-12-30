import { styled } from '@mui/material';
import {
  disableGlobalCursorStyles,
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from 'react-resizable-panels';
import { NavigationBar } from '../navigationBar/NavigationBar';
import { MainArea } from './MainArea';
import { TreeView } from './TreeView';
import { PropertyView } from './PropertyView';

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
    return (
        <ProjectViewStyled>
            <NavigationBar />
            <PanelGroup direction='horizontal'>
                <Panel id='left' minSize={10}>
                    <TreeView />
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