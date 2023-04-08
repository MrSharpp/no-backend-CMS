import { createSlice } from '@reduxjs/toolkit';

const tablesSlice = createSlice({
  name: 'global',
  initialState: [{ name: 'Mailing List' }] as {
    name: string;
  }[],
  reducers: {
    addTable(state, action) {
      state.push({ name: action.payload });
    },
    removeTable(state, action) {
      state = state.filter((item) => item.name != action.payload);
    },
  },
});

export const { addTable, removeTable } = tablesSlice.actions;
export default tablesSlice.reducer;
