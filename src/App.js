// import { useState } from 'react';
import './App.css';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
// import useLocalStorage from './hooks/useLocalStorage';

function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  return (
    <div className="App">
      <Container>
        <h1 className="main__title">Phonebook</h1>
        <ContactForm />

        <h2 className="section__title">Contacts</h2>
        <Filter />

        <ContactList />
      </Container>
    </div>
  );
}

export default App;
