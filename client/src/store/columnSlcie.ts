import { createSlice } from '@reduxjs/toolkit';

interface IColumn {
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
  ] as IColumn[],
  reducers: {},
});

export default columnSlice.reducer;
