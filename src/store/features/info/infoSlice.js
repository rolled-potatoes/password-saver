import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
  name: 'info',
  initialState: {
    list: [],
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setList } = infoSlice.actions;

export default infoSlice.reducer;
