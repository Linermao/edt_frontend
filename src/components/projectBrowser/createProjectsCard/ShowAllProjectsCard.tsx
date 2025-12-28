
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import { CreateProjectsCard } from './CreateProjectsCard';
import { styled } from '@mui/material';

const StyledButton = styled(Button)(() => ({
  padding: 0,
  margin: 0,
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.divider,
}));

const StyledAddIcon = styled(MoreHorizIcon)(({ theme }) => ({
  fontSize: theme.spacing(8),
  color: theme.palette.common.white,
}));

export function ShowAllProjectsCard() {
  return (
    <>
      <StyledButton data-testid="show-all-templates">
        <CreateProjectsCard title='show all project' description='show all project'>
          <ContentWrapper>
            <StyledAddIcon />
          </ContentWrapper>
        </CreateProjectsCard>
      </StyledButton>
    </>
  );
};
