const { ADD_CONTACT } = require('./constants');

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};
