import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.8em;
    text-align: center;
    color: palevioletred;
`;
const TitleFilter = styled.h3`
    font-size: 1.3em;
    text-align: center;
    color: palevioletred;
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
        background-color: palevioletred;
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
        background-color: palevioletred;
        color: #fff;
    }
`;
const Text = styled.p`
    text-align: center;
`;

export {
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
};
