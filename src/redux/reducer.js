import { ADD_CONTACT } from './constants';

const initialState = {
  contacts: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const { contacts } = state;
      return { contacts: [...contacts, action.payload] };
    default:
      return state;
  }
};
