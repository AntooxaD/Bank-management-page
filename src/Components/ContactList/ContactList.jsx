import { BtnDelete } from '../Styled/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/contactActions';
import { getContacts } from '../../Redux/selectors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ContactList() {
    const dispatch = useDispatch();
    const onDelete = id => dispatch(deleteContact(id));

    const contacts = useSelector(getContacts);

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
                    {contacts.map(contact => (
                        <TableRow
                            key={contact.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell>{contact.name} </TableCell>
                            <TableCell align="center">
                                {contact.interestRate}
                            </TableCell>
                            <TableCell align="center">
                                {contact.maximumLoan}
                            </TableCell>
                            <TableCell align="center">
                                {contact.minDownPay}
                            </TableCell>
                            <TableCell align="center">
                                {contact.loanTerm}
                            </TableCell>
                            <BtnDelete
                                type="button"
                                onClick={() => {
                                    onDelete(contact.id);
                                }}
                            >
                                Delete
                            </BtnDelete>
                            <BtnDelete
                                type="button"
                                onClick={() => {
                                    onDelete(contact.id);
                                }}
                            >
                                Edit
                            </BtnDelete>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ContactList;
