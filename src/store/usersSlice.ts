import { createSlice } from "@reduxjs/toolkit";
import { data } from '../data';
import { TInitialState } from '../types/types'

const initialState: TInitialState = {
  users: data,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;