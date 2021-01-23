// import { createStore, combineReducers } from 'redux';
// import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducers.js';
import logger from 'redux-logger';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

const middleware = [...getDefaultMiddleware(), logger];

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
