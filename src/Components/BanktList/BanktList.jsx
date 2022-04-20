import { BtnDelete } from '../Styled/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBank } from '../../Redux/contactActions';
import { getBanks } from '../../Redux/selectors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function BanktList() {
    const dispatch = useDispatch();
    const onDelete = id => dispatch(deleteBank(id));

    const banks = useSelector(getBanks);

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Bank</TableCell>
                        <TableCell align="center">Interest Rate</TableCell>
                        <TableCell align="center">Maximum Loan</TableCell>
                        <TableCell align="center">
                            Minimum Down Payment
                        </TableCell>
                        <TableCell align="center">Loan Term</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {banks.map(bank => (
                        <TableRow
                            key={bank.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell>{bank.name} </TableCell>
                            <TableCell align="center">
                                {bank.interestRate}
                            </TableCell>
                            <TableCell align="center">
                                {bank.maximumLoan}
                            </TableCell>
                            <TableCell align="center">
                                {bank.minDownPay}
                            </TableCell>
                            <TableCell align="center">
                                {bank.loanTerm}
                            </TableCell>
                            <BtnDelete
                                type="button"
                                onClick={() => {
                                    onDelete(bank.id);
                                }}
                            >
                                Delete
                            </BtnDelete>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BanktList;
