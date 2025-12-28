import { Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useProjects } from "./useProjects";

const ListProjectsAreaMain = styled('main')(({ theme }) => ({  
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
}));

const ListProjectsAreaHeader = styled('div')(() => ({  
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export function ListProjectsArea() {

    const { data, loading } = useProjects();
    const projects = data?.viewer.projects.edges.map((edge) => edge.node) ?? [];

    return (
        <ListProjectsAreaMain>
            <ListProjectsAreaHeader>
                <Typography variant="h4"> Existing Projects </Typography>
            </ListProjectsAreaHeader>

            <TableContainer component={Paper} elevation={1}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: 'grey.100' }}>
                        <TableCell sx={{ fontWeight: 600 }}>
                        Name
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 600 }}>
                        Actions
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {projects.map((row) => (
                        <TableRow
                            key={row.name}
                            hover
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                            }}
                        >
                        <TableCell
                            component="th"
                            scope="row"
                            sx={{
                            fontWeight: 500,
                            }}
                        >
                            {row.name}
                        </TableCell>

                        <TableCell align="right">
                            ...
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </ListProjectsAreaMain>
    )
}