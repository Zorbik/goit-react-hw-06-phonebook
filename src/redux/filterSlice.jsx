import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSearchQuery(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { changeSearchQuery } = filterSlice.actions;
