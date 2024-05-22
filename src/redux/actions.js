import { createAction } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';
const { UPDATE_CONTACT, SET_FILTER } = require('./constants');

export const addContact = createAction('contacts/addContact', data => {
  return {
    payload: {
      id: nanoid(),
      ...data,
    },
  };
});

// export const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       id: nanoid(),
//       ...payload,
//     },
//   };
// };

export const deleteContact = createAction('contacts/deleteContact');

// export const deleteContact = payload => {
//   return {
//     type: DELETE_CONTACT,
//     payload,
//   };
// };

export const updateContact = payload => {
  return {
    type: UPDATE_CONTACT,
    payload,
  };
};

export const setFilter = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};
