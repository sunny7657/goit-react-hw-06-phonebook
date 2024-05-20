import { nanoid } from 'nanoid';
const { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } = require('./constants');

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};

export const updateContact = payload => {
  return {
    type: UPDATE_CONTACT,
    payload,
  };
};
