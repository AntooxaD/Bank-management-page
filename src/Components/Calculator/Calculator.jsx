import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getBanks } from '../../Redux/selectors';
import {
    Title,
    BoxCalc,
    Select,
    InputBtn,
    AmountLabel,
    Loan,
    LoanInpur,
} from '../Styled/Styled';
export default function Calculator() {
    // state to storage the values given by the user when filling the input fields
    const [userValues, setUserValues] = useState({
        amount: '',
        interestRate: '',
        downPayment: '',
        maximumLoan: '',
    });

    // state to storage the results of the calculation
    const [results, setResults] = useState({
        monthlyPayment: '',
        isResult: false,
    });

    // state to storage error message
    const [error, setError] = useState('');

    const [filter, setFilter] = useState('');
    // event handler to update state when the user enters values
    const banks = useSelector(getBanks);

    const handleInputChange = event =>
        setUserValues({
            ...userValues,

            [event.target.name]: event.target.value,
        });

    const handlerFilter = e => {
        const data = banks.filter(contact => contact.name === e.target.value);
        setFilter(...data);
    };

    // Manage validations and error messages
    const isValid = () => {
        const { amount, downPayment } = userValues;
        let actualError = '';
        // Validate if there are values
        if (!amount || !downPayment) {
            actualError = 'All the values are required';
        }
        // Validade if the values are numbers
        if (isNaN(amount) || isNaN(downPayment)) {
            actualError = 'All the values must be a valid number';
        }
        // Validade if the values are positive numbers
        if (Number(amount) <= 0 || Number(downPayment) <= 0) {
            actualError = 'All the values must be a positive number';
        }
        // Validade if the values are minimum payment
        if (downPayment < filter.minDownPay) {
            actualError = `Sorry, minimum payment ${filter.minDownPay}`;
        }
        // Validade if the values are maximum loan
        if (amount > filter.maximumLoan) {
            actualError = `Sorry, maximum loan ${filter.maximumLoan}`;
        }
        if (actualError) {
            setError(actualError);
            return false;
        }
        return true;
    };

    // Handle the data submited - validate inputs and send it as a parameter to the function that calculates the loan
    const handleSubmitValues = e => {
        e.preventDefault();
        if (isValid()) {
            setError('');
            calculateResults(userValues);
        }
    };

    // Calculation
    const calculateResults = ({ amount }) => {
        const userAmount = Number(amount);
        const calculatedInterest = Number(filter.interestRate) / 100 / 12;
        const calculatedPayments = Number(filter.loanTerm) * 12;

        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (userAmount * x * calculatedInterest) / (x - 1);

        if (isFinite(monthly)) {
            const monthlyPaymentCalculated = monthly.toFixed(2);

            setResults({
                monthlyPayment: monthlyPaymentCalculated,
                isResult: true,
            });
        }
        return;
    };

    // Clear input fields
    const clearFields = () => {
        setUserValues({
            amount: '',
            downPayment: '',
        });

        setResults({
            monthlyPayment: '',
            isResult: false,
        });
    };

    return (
        <BoxCalc>
            <div>
                <Title>Loan Calculator</Title>
                <p>{error}</p>
                <form onSubmit={handleSubmitValues}>
                    {/* // ternary operator manages when the calculator and results will be displayed to the user  */}
                    {!results.isResult ? (
                        <div>
                            <div>
                                <Select onChange={handlerFilter}>
                                    <option>---</option>
                                    {banks.map(bank => (
                                        <option key={bank.id}>
                                            {bank.name}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <Loan>
                                <AmountLabel id="label">Amount:</AmountLabel>
                                <LoanInpur
                                    type="text"
                                    name="amount"
                                    placeholder="Loan amount"
                                    value={userValues.amount}
                                    onChange={handleInputChange}
                                />
                            </Loan>
                            <Loan>
                                <label id="label">Down payment:</label>
                                <LoanInpur
                                    type="text"
                                    name="downPayment"
                                    placeholder="Down payment"
                                    value={userValues.downPayment}
                                    onChange={handleInputChange}
                                />
                            </Loan>
                            <InputBtn type="submit" />
                        </div>
                    ) : (
                        <div>
                            <h4>
                                Loan amount: ${userValues.amount} <br />{' '}
                            </h4>
                            <Loan>
                                <label id="label">Monthly Payment:</label>
                                <LoanInpur
                                    type="text"
                                    value={results.monthlyPayment}
                                    disabled
                                />
                            </Loan>
                            <InputBtn
                                value="Calculate again"
                                type="button"
                                onClick={clearFields}
                            />
                        </div>
                    )}
                </form>
            </div>
        </BoxCalc>
    );
}
