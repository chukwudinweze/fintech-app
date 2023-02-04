import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExpensesType {
  naira: number;
  dollar: number;
  euro: number;
}

const initialState: ExpensesType = {
  naira: 0,
  dollar: 0,
  euro: 0,
};

const totalExpensesSlice = createSlice({
  name: "TotalExpenses",
  initialState,
  reducers: {
    addToNairaTotalExpenses(state, action: PayloadAction<number>) {
      state.naira = state.naira + action.payload;
    },
    addToDollarTotalExpenses(state, action: PayloadAction<number>) {
      state.dollar = state.dollar + action.payload;
    },
    addToEuroTotalExpenses(state, action: PayloadAction<number>) {
      state.euro = state.euro + action.payload;
    },
  },
});

export const {
  addToNairaTotalExpenses,
  addToDollarTotalExpenses,
  addToEuroTotalExpenses,
} = totalExpensesSlice.actions;

export default totalExpensesSlice;
