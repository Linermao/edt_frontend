import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { CreateProjectsCard } from './CreateProjectsCard';

const StyledButton = styled(Button)(() => ({
  padding: 0,
  margin: 0,
})) as typeof Button;

const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
}));

const StyledAddIcon = styled(AddIcon)(({ theme }) => ({
  fontSize: theme.spacing(8),
  color: theme.palette.common.white,
}));

export function NewProjectCard() {
    return (
        <StyledButton to="/new/project" component={RouterLink} data-testid="create">
            <CreateProjectsCard title="new project" description="new project">
                <ContentWrapper>
                  <StyledAddIcon />
                </ContentWrapper>
            </CreateProjectsCard>
        </StyledButton>
    ) 
}
