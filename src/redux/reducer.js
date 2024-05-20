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

export const reducer = (state = initialState, action) => {
  const { contacts } = state;
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...contacts, action.payload],
      };
    case DELETE_CONTACT:
      const newContacts = contacts.filter(
        contact => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: newContacts,
      };
    case UPDATE_CONTACT:
      const updatedContact = contacts.find(
        contact => contact.id === action.payload
      );
      updatedContact.name = 'updated';
      return {
        ...state,
        contacts: [...contacts, updatedContact],
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
