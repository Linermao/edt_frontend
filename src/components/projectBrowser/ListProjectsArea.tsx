import { Paper, Skeleton, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useProjects } from "./useProjects";
import { useNavigate } from "react-router-dom";

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

    const { data: projects, loading } = useProjects();
    const navigate = useNavigate();
    
    const renderRows = () => {
        if (loading) {
            return Array.from({ length: 5 }).map((_, idx) => (
                <TableRow key={idx}>
                <TableCell>
                    <Skeleton variant="text" width="80%" />
                </TableCell>
                <TableCell align="right">
                    <Skeleton variant="text" width="40%" />
                </TableCell>
                </TableRow>
            ));
        }

        return projects.map((row) => (
            <TableRow
                key={row.projectId}
                hover
                sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                cursor: 'pointer',
                }}
                onClick={() => navigate(`/projects/${row.projectId}`)}
            >
                <TableCell component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="right">...</TableCell>
            </TableRow>
        ));
    };

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
                <TableBody>{renderRows()}</TableBody>
            </Table>
            </TableContainer>
        </ListProjectsAreaMain>
    )
}