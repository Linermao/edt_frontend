import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

type CreateProjectAreaCardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const CardRoot = styled(Card)(() => ({
  display: 'grid',
  gridTemplateColumns: '150px',
  gridTemplateRows: '1fr min-content',
  width: '150px',
}));

const CardContentWrapper = styled(CardContent)(() => ({
  padding: 0,
  width: '150px',
  height: '110px',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr',
  alignItems: 'stretch',
  justifyItems: 'stretch',
}));

const LabelTypography = styled(Typography)(() => ({
  textTransform: 'none',
  fontWeight: 400,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

export function CreateProjectsCard({ title, description, children }: CreateProjectAreaCardProps) {
  return (
    <CardRoot>
      <CardContentWrapper>{children}</CardContentWrapper>
      <CardActions>
        <Tooltip title={description}>
          <LabelTypography variant="body1">{title}</LabelTypography>
        </Tooltip>
      </CardActions>
    </CardRoot>
  );
}
