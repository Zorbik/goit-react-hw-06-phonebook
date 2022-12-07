import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [], filter: '' };

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => payload !== id);
    },
    changeSearchQuery(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, changeSearchQuery } =
  phoneBookSlice.actions;
