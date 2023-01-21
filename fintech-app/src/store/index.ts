// import { useSelector, TypedUseSelectorHook } from "react-redux";
// import { useDispatch } from "react-redux/es/exports";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

interface accountBalanceSliceState {
  totalBalance: number;
}

const initialState: accountBalanceSliceState = {
  totalBalance: 200000,
};

const accountBalance = createSlice({
  name: "accountBalance",
  initialState,
  reducers: {
    withdraw(state, action: PayloadAction<number>) {
      state.totalBalance = state.totalBalance - action.payload;
    },
    fundAccount(state, action: PayloadAction<number>) {
      state.totalBalance = state.totalBalance + action.payload;
    },
    transfer(state, action: PayloadAction<number>) {
      state.totalBalance = state.totalBalance - action.payload;
    },
  },
});

export const store = configureStore({
  reducer: { accountBalance: accountBalance.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { withdraw, transfer } = accountBalance.actions;

export default accountBalance.reducer;
