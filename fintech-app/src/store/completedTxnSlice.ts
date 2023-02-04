import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface completedTxnType {
  amount: number;
  date: string;
  label: string;
  id: string;
  typeOfTxn?: string;
  currency: string;
}

const initialState: completedTxnType[] = [];

const completedTxnSlice = createSlice({
  name: "completedTxn",
  initialState,
  reducers: {
    getNewTransaction(state, action: PayloadAction<completedTxnType>) {
      state.push(action.payload);
    },
  },
});

export const { getNewTransaction } = completedTxnSlice.actions;

export default completedTxnSlice;
