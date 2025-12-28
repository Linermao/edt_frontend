import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { CreateProjectsCard } from './CreateProjectsCard';
import { styled } from '@mui/material';

const StyledButton = styled(Button)(() => ({
  padding: 0,
  margin: 0,
})) as typeof Button;

const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.divider,
}));

const StyledAddIcon = styled(CloudUploadOutlinedIcon)(({ theme }) => ({
  fontSize: theme.spacing(8),
  color: theme.palette.common.white,
}));

export function UploadProjectCard() {
  return (
    <StyledButton to={`/upload/project`} component={RouterLink} data-testid="upload">
      <CreateProjectsCard title='upload project' description='upload project'>
        <ContentWrapper>
          <StyledAddIcon />
        </ContentWrapper>
      </CreateProjectsCard>
    </StyledButton>
  );
};
