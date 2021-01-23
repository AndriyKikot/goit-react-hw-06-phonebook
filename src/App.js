// import { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';

import { getContacts } from './redux/contacts/contacts-selectors';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');
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
