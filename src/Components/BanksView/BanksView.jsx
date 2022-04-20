import '../../App.css';
import BankForm from '../BankForm/BankForm';
import BanktList from '../BanktList/BanktList';
import Filter from '../Filter/Filter';
import { Title, Text } from '../Styled/Styled';
import { useSelector } from 'react-redux';
import { getBanks } from '../../Redux/selectors';

export default function BanksView() {
    const banks = useSelector(getBanks);
    return (
        <div className="App">
            <Title>Banks</Title>
            <BankForm />
            <Filter />
            {banks.length ? <BanktList banks={banks} /> : <Text>Nothing</Text>}
        </div>
    );
}
