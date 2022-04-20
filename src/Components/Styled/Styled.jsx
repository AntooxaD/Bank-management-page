import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.8em;
    text-align: center;
    color: #1976d2;
`;
const TitleFilter = styled.h3`
    font-size: 1.3em;
    text-align: center;
    color: #1976d2;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    margin: 5px auto;
    display: flex;
`;
const FormCalc = styled.div``;
const SpanName = styled.span`
    margin-left: 20px;
`;

const Input = styled.input`
    margin-left: 20px;
`;
const InputButton = styled.input`
    margin-left: 20px;
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const InputFilter = styled.input`
    margin-left: 310px;
`;
const ButtonAdd = styled.button`
    width: 100px;
    margin: 8px auto;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    :hover,
    :focus {
        background-color: #1976d2;
        color: #fff;
    }
`;
const BtnDelete = styled.button`
    height: 20px;
    margin-left: 20px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    :hover,
    :focus {
        background-color: #1976d2;
        color: #fff;
    }
`;
const Text = styled.p`
    text-align: center;
`;
const Select = styled.select`
    height: 20px;
    width: 100px;
    border-radius: 5px;
    margin-bottom: 20px;
`;
const BoxCalc = styled.div`
    text-align: center;
`;
const InputBtn = styled.input`
    background-color: #55a9fe;
    border-radius: 5px;
`;
const AmountLabel = styled.label`
    margin-right: 50px;
`;
const Loan = styled.div`
    margin-bottom: 20px;
`;
const LoanInpur = styled.input`
    margin-left: 30px;
`;
export {
    LoanInpur,
    Loan,
    AmountLabel,
    InputBtn,
    Text,
    Title,
    Form,
    Wrapper,
    SpanName,
    Input,
    ButtonAdd,
    TitleFilter,
    InputFilter,
    BtnDelete,
    InputButton,
    FormCalc,
    Select,
    BoxCalc,
};
