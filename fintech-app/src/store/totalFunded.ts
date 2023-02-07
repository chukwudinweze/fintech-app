import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface totalFunded {
  amount: number;
}

const initialState: totalFunded = {
  amount: 0,
};

const totalFundedSlice = createSlice({
  name: "totalFund",
  initialState,
  reducers: {
    getNewFundAmount(state, action: PayloadAction<number>) {
      state.amount = state.amount + action.payload;
    },
  },
});

export const { getNewFundAmount } = totalFundedSlice.actions;

export default totalFundedSlice;
