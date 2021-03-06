import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Divider from '@mui/material/Divider';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: number,
) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2022-01-04',
                customerId: '111091700',
                amount: 3,
            },
            {
                date: '2022-01-03',
                customerId: '111091701',
                amount: 1,
            },
        ],
    };
}

function Row(props: {row: ReturnType<typeof createData>}) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return <>
        <React.Fragment>
            <TableRow sx={{ '& > *': {borderBottom: 'unset'} }}>
                <TableCell>
                    <IconButton
                        aria-label= "expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0,}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchase">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total Price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100)/100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    </>
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
export default function(){
    return <>
        
        <Grid container spacing={1}>
            <Grid item xs={12} md={3}>
                <Paper sx={{ bgcolor: 'success.main', textAlign: 'center', p: 2, alignContent: 'center' }}>
                    <Box sx={{ 
                        background: 'linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)',
                        height: '64px',
                        width: '64px',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        m: 'auto'
                    }}>
                        <VisibilityIcon sx={{ color: 'success.dark' }} />
                    </Box>
                    <Typography component="div" variant="h3" color="success.dark">
                        750K
                    </Typography>
                    <Typography component="div" variant="h6" color="success.dark">
                        Weekly Visits
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper sx={{ bgcolor: 'secondary.thin', textAlign: 'center', p: 2, alignContent: 'center' }}>
                    <Box sx={{ 
                        background: 'linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)',
                        height: '64px',
                        width: '64px',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        m: 'auto'
                    }}>
                        <GroupIcon sx={{ color: 'secondary.thincolor' }} />
                    </Box>
                    <Typography component="div" variant="h3" color="secondary.thincolor">
                        50K
                    </Typography>
                    <Typography component="div" variant="h6" color="secondary.thincolor">
                        Total Users
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper sx={{ bgcolor: 'warning.thin', textAlign: 'center', p: 2, alignContent: 'center' }}>
                    <Box sx={{ 
                        background: 'linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)',
                        height: '64px',
                        width: '64px',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        m: 'auto'
                    }}>
                        <ShoppingCartIcon sx={{ color: 'warning.thincolor' }} />
                    </Box>
                    <Typography component="div" variant="h3" color="warning.thincolor">
                        6K
                    </Typography>
                    <Typography component="div" variant="h6" color="warning.thincolor">
                        Total Weekly Orders
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper sx={{ bgcolor: 'error.thin', textAlign: 'center', p: 2, alignContent: 'center' }}>
                    <Box sx={{ 
                        background: 'linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)',
                        height: '64px',
                        width: '64px',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        m: 'auto'
                    }}>
                        <MonetizationOnIcon sx={{ color: 'error.thincolor' }} />
                    </Box>
                    <Typography component="div" variant="h3" color="error.thincolor">
                        300K
                    </Typography>
                    <Typography component="div" variant="h6" color="error.thincolor">
                        Total Weekly Sales ($)
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sx={{ my: 4, }}>
                <Divider light />
            </Grid>
            <Grid item xs={12} md={8}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper>
                    <Typography>
                        Total Sales In this Month.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </>
}