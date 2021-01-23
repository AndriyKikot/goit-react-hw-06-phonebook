import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';
import { toast } from 'react-toastify';

// import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const checkingEmptyQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  const checkingContactName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkingContactNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (checkingEmptyQuery(name, number)) {
      toast.warning('Enter contact name and number phone!');
      return;
    }

    if (checkingContactName(name, number)) {
      toast.info(`This ${name} is already in the phonebook!`);
      return;
    }

    if (checkingContactNumber(number)) {
      toast.info(`This ${number} is already in the phonebook!`);
      return;
    }

    dispatch(addContact(name, number));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.contact__form} onSubmit={handleSubmit}>
      <label className={styles.contact__label}>
        Name
        <input
          className={styles.contact__input}
          placeholder="Enter name..."
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.contact__label}>
        Number
        <input
          className={styles.contact__input}
          placeholder="Enter number..."
          type="tel"
          value={number}
          name="number"
          onChange={handleChange}
          required
        />
      </label>

      <button className={styles.contact__btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onAddContact: (name, number) => dispatch(addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
