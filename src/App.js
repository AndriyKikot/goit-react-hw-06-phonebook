import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getContacts } from './redux/contacts/contacts-selectors';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import NumberContacts from './components/NumberContacts';

import './App.css';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <div className="App">
      <Container>
        <h1 className="main__title">Phonebook</h1>
        <ContactForm />

        {contacts.length > 0 ? (
          <div>
            <h2 className="section__title">Contacts</h2>
            <Filter />
            <ContactList />
            <NumberContacts />
          </div>
        ) : (
          <p>Your phone book is empty :(</p>
        )}

        <ToastContainer autoClose={3000} />
      </Container>
    </div>
  );
}

export default App;
