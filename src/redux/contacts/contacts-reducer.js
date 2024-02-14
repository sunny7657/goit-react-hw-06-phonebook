import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contacts-actions';

const initialState = [];

export const contactsReducer = createReducer(initialState, builder => {
  return builder
    .addCase(addContact, (state, { payload }) => [...state, payload])
    .addCase(deleteContact, (state, { payload }) => [
      state.filter(item => item.id !== payload),
    ]);
});

// export const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case addContact.type:
//       return [...state, payload];

//     case deleteContact.type:
//       return state.filter(item => item.id !== payload);

//     default:
//       return state;
//   }
// };
