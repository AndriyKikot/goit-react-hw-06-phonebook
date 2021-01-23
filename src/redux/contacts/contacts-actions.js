import types from './contacts-types';
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

const addContact = createAction(types.ADD, (name, number) => ({
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

const deleteContact = createAction(types.DELETE);

const changeFilter = createAction(types.CHANGE_FILTER);

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export { addContact, deleteContact, changeFilter };
