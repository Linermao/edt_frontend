import { Link, styled, Typography } from "@mui/material";

const FooterBase = styled('footer')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(0.5),
  margin: theme.spacing(2),
  '& > *': {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
}));

export function Footer() {
    return (
        <FooterBase>
            <Typography variant="caption">
                &copy; {new Date().getFullYear()} TODO poweredBy 
            </Typography>
            <Link variant="caption" href="" rel="noopener noreferrer" target="_blank">
                Linermao
            </Link>
        </FooterBase>
    )
}