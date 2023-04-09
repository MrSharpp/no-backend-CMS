import { createSlice } from '@reduxjs/toolkit';

interface Column {
  tableId: number;
  name: string;
  endpoint: string;
  path: string;
}

const columnSlice = createSlice({
  name: 'column',
  initialState: [
    {
      tableId: 0,
      name: 'username',
      endpoint: 'https://www.google.com',
      path: '$.name',
    },
  ] as Column[],
  reducers: {},
});

export default columnSlice.reducer;
