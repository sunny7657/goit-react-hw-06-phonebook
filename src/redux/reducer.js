// import { addContact } from './actions';
// import { SET_FILTER, UPDATE_CONTACT } from './constants';

// import { createReducer } from '@reduxjs/toolkit';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const reducer = createReducer(initialState, builder => {
//   builder.addCase(addContact, (state, { payload }) =>
//     state.contacts.push(payload)
//   );
// .addCase(deleteContact, (state, { payload }) => ({}));
// });

// export const reducer = (state = initialState, { type, payload }) => {
//   const { contacts } = state;
//   switch (type) {
//     case addContact.type:
//       return {
//         ...state,
//         contacts: [...contacts, payload],
//       };
//     case deleteContact.type:
//       const newContacts = contacts.filter(contact => contact.id !== payload);
//       return {
//         ...state,
//         contacts: newContacts,
//       };
//     case UPDATE_CONTACT:
//       const updatedContact = contacts.find(contact => contact.id === payload);
//       updatedContact.name = 'updated';
//       return {
//         ...state,
//         contacts: [...contacts, updatedContact],
//       };
//     case SET_FILTER:
//       return {
//         ...state,
//         filter: payload,
//       };
//     default:
//       return state;
//   }
// };
// export default reducer;
