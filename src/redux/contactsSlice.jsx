import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterSlice } from './filterSlice';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.push(payload);
    },
    deleteContact(state, { payload }) {
      return (state = state.filter(({ id }) => payload !== id));
    },
  },
});

const reducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistConfig = {
  key: ' phonebook',
  storage,
  blacklist: ['filter'],
};

export const contactsReduser = persistReducer(persistConfig, reducer);

export const { addContact, deleteContact } = contactsSlice.actions;
