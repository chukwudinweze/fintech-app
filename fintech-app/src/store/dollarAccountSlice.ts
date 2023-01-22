import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dollarBalanceSliceState {
  balance: number;
}

const initialState: dollarBalanceSliceState = {
  balance: 3000,
};

const dollarAccount = createSlice({
  name: "dollarAccount",
  initialState,
  reducers: {
    withdrawDollar(state, action: PayloadAction<number>) {
      state.balance = state.balance - action.payload;
    },

    fundDollar(state, action: PayloadAction<number>) {
      state.balance = state.balance + action.payload;
    },

    sendDollar(state, action: PayloadAction<number>) {
      state.balance = state.balance - action.payload;
    },
  },
});

export const { withdrawDollar, fundDollar, sendDollar } = dollarAccount.actions;

export default dollarAccount;
