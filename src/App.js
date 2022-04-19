import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import { Title, Text } from './Components/Styled/Styled';
import { useSelector } from 'react-redux';
import { getContacts } from './Redux/selectors';

function App() {
    const contacts = useSelector(getContacts);
    return (
        <div className="App">
            <Title>List of banks</Title>
            <ContactForm />
            <Filter />
            {contacts.length ? (
                <ContactList contacts={contacts} />
            ) : (
                <Text>Nothing</Text>
            )}
        </div>
    );
}

export default App;
