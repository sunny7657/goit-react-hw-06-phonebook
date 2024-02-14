import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', data => {
  return {
    payload: {
      id: nanoid(),
      ...data,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

// export const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       id: nanoid(),
//       ...payload,
//     },
//   };
// };

// export const deleteContact = payload => {
//   return {
//     type: DELETE_CONTACT,
//     payload,
//   };
// };
