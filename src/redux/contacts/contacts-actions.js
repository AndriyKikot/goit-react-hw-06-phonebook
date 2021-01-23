// import types from './contacts-types';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

export const addContact = createAction('contacts/Add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

export const deleteContact = createAction('contacts/Delete');

export const changeFilter = createAction('contacts/ChangeFilter');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export { addContact, deleteContact, changeFilter };
