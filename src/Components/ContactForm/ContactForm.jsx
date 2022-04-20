import { useState } from 'react';
import {
    Form,
    Wrapper,
    SpanName,
    Input,
    ButtonAdd,
    InputButton,
} from '../Styled/Styled';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../Redux/contactActions';

function ContactForm() {
    const [name, setName] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [maximumLoan, setMaximumLoan] = useState('');
    const [minDownPay, setMinDownPay] = useState('');
    const [loanTerm, setLoanTerm] = useState('');

    const nameId = nanoid();
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            addContact({
                name,
                interestRate,
                maximumLoan,
                minDownPay,
                loanTerm,
            }),
        );
        reset();
        return;
    };

    function reset() {
        setName('');
        setInterestRate('');
        setMaximumLoan('');
        setMinDownPay('');
        setLoanTerm('');
    }

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'interestRate':
                setInterestRate(value);
                break;
            case 'maximumLoan':
                setMaximumLoan(value);
                break;
            case 'minDownPay':
                setMinDownPay(value);
                break;
            case 'loanTerm':
                setLoanTerm(value);
                break;
            default:
                break;
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Wrapper>
                <div>
                    <SpanName>Bank name</SpanName>
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        id={nameId}
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <SpanName>Interest rate</SpanName>
                    <Input
                        type="number"
                        name="interestRate"
                        min={10}
                        max={100}
                        step={1}
                        required
                        value={interestRate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <SpanName>Maximum loan</SpanName>
                    <InputButton
                        type="number"
                        name="maximumLoan"
                        required
                        value={maximumLoan}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <SpanName>Minimum down payment</SpanName>
                    <InputButton
                        type="number"
                        name="minDownPay"
                        required
                        value={minDownPay}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <SpanName>Loan term</SpanName>
                    <Input
                        type="number"
                        name="loanTerm"
                        min={1}
                        max={240}
                        step={1}
                        required
                        value={loanTerm}
                        onChange={handleChange}
                    />
                </div>
            </Wrapper>
            <ButtonAdd type="submit">Add</ButtonAdd>
        </Form>
    );
}
export default ContactForm;
