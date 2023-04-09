import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './tableSlice';
import columnReducer from './columnSlcie';

export const store = configureStore({
  reducer: {
    tables: tableReducer,
    columns: columnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
