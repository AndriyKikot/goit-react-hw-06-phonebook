import styles from './ContactList.module.css';

import ContactListItem from './ContactListItem';

// import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';

import { filterContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(filterContacts);
  const dispatch = useDispatch();

  if (contacts.length === 0) return null;
  return (
    <ul className={styles.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;

// const getFilterContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getFilterContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
