import '../../App.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Title, Text } from '../Styled/Styled';
import { useSelector } from 'react-redux';
import { getContacts } from '../../Redux/selectors';

export default function BanksView() {
    const contacts = useSelector(getContacts);
    return (
        <div className="App">
            <Title>Phonebook</Title>
            <ContactForm />
            <Title>Contacts</Title>
            <Filter />
            {contacts.length ? (
                <ContactList contacts={contacts} />
            ) : (
                <Text>Nothing</Text>
            )}
        </div>
    );
}
