import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function EmployeeTable() {
    const classes = useStyles();
    const [employeeData, setEmployeeData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/employeeData')
            .then(res => {
                res.json().then((data) => {
                    console.log(data);
                    setEmployeeData(data);

                })
            })
            .catch((error) => {
                console.log(error);
            })
    },[])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Employee ID</StyledTableCell>
                        <StyledTableCell align="right">Employee Name</StyledTableCell>
                        <StyledTableCell align="right">Employee Desc</StyledTableCell>
                        <StyledTableCell align="right">Edit Employee Details</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employeeData.map(row => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.title}</StyledTableCell>
                            <StyledTableCell align="right">{row.designation}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Button variant="contained" color="primary">
                                    Edit row
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <Button variant="contained" color="primary" href='/EmployeeEditDetails'>
                Add row
            </Button>

        </TableContainer>
    );
}