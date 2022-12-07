import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { phoneBookSlice } from './phoneBookSlice';

const persistConfig = {
  key: ' phoneBook',
  storage,
  blacklist: ['filter'],
};

export const persistedPhoneBookReduser = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);

const store = configureStore({
  reducer: persistedPhoneBookReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
export default store;
