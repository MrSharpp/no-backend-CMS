import { createSlice } from '@reduxjs/toolkit';

interface ITable {
  id: number;
  name: string;
}

const tablesSlice = createSlice({
  name: 'table',
  initialState: [{ name: 'Mailing List', id: 0 }] as ITable[],
  reducers: {
    addTable(state, action) {
      state.push({ name: action.payload, id: 0 });
    },
    removeTable(state, action) {
      state = state.filter((item) => item.name != action.payload);
    },
  },
});

export const { addTable, removeTable } = tablesSlice.actions;
export default tablesSlice.reducer;
