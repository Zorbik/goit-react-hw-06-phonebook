import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { value: [] },
  reducers: {
    addContact(state, action) {
      state.value.push(action.payload);
    },
    deleteContact(state, action) {
      state.value = state.value.filter(({ id }) => action.payload !== id);
    },
  },
});

const persistConfig = {
  key: ' phonebook',
  storage,
};

export const contactsReduser = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
