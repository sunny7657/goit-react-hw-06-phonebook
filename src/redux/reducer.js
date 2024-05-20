import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from './constants';

const initialState = {
  contacts: [],
};

export const reducer = (state = initialState, action) => {
  const { contacts } = state;
  switch (action.type) {
    case ADD_CONTACT:
      return { contacts: [...contacts, action.payload] };
    case DELETE_CONTACT:
      const newContacts = contacts.filter(
        contact => contact.id !== action.payload
      );
      return { contacts: newContacts };
    case UPDATE_CONTACT:
      const updatedContact = contacts.find(
        contact => contact.id === action.payload
      );
      updatedContact.name = 'updated';
      return { contacts: [...contacts, updatedContact] };
    default:
      return state;
  }
};
