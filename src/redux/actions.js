import { nanoid } from 'nanoid';
const { ADD_CONTACT } = require('./constants');

export const addContact = payload => {
  return {
    id: nanoid(),
    type: ADD_CONTACT,
    payload,
  };
};
