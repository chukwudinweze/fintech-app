import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface balanceSliceState {
  balance: number;
}

const initialState: balanceSliceState = {
  balance: 300,
};

const nairaAccount = createSlice({
  name: "nairaAccount",
  initialState,
  reducers: {
    withdrawNaira(state, action: PayloadAction<number>) {
      state.balance = state.balance - action.payload;
    },

    fundNaira(state, action: PayloadAction<number>) {
      state.balance = state.balance + action.payload;
    },

    sendNaira(state, action: PayloadAction<number>) {
      state.balance = state.balance - action.payload;
    },
  },
});

export const { withdrawNaira, fundNaira, sendNaira } = nairaAccount.actions;

export default nairaAccount;
