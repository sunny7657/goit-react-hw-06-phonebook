import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  //actions + reducer
  name: 'contacts', //name of this part for redux dev tools
  initialState: [],
  reducers: {
    //reducer is an object, where every key is a function - reducer
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter(item => item.id !== payload),

    updateContact: (state, { payload }) => {
      const { itemId, name, number } = payload;
      const contact = state.find(item => item.id === itemId);
      if (name) contact.name = name;
      if (number) contact.number = number;
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
