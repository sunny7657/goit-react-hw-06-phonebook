import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_FILTER,
  UPDATE_CONTACT,
} from './constants';

const initialState = {
  contacts: [],
  filter: '',
};

export const reducer = (state = initialState, { type, payload }) => {
  const { contacts } = state;
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...contacts, payload],
      };
    case DELETE_CONTACT:
      const newContacts = contacts.filter(contact => contact.id !== payload);
      return {
        ...state,
        contacts: newContacts,
      };
    case UPDATE_CONTACT:
      const updatedContact = contacts.find(contact => contact.id === payload);
      updatedContact.name = 'updated';
      return {
        ...state,
        contacts: [...contacts, updatedContact],
      };
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
};
