import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducer.js';

export const store = configureStore({
  reducer: {
    contactsReducer,
  },
});
