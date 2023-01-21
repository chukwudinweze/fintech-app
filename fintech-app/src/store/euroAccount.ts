import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface euroBalanceSliceState {
  balance: number;
}

const initialState: euroBalanceSliceState = {
  balance: 200000,
};

const euroAccount = createSlice({
  name: "euroAccount",
  initialState,
  reducers: {
    withdrawEuro(state, action: PayloadAction<number>) {
      state.balance = state.balance - action.payload;
    },

    fundEuro(state, action: PayloadAction<number>) {
      state.balance = state.balance + action.payload;
    },

    sendEuro(state, action: PayloadAction<number>) {
      state.balance = state.balance - action.payload;
    },
  },
});

export const { withdrawEuro, fundEuro, sendEuro } = euroAccount.actions;

export default euroAccount;
