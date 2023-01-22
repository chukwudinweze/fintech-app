import { createSlice } from "@reduxjs/toolkit";
import { currencySymbol } from "./currencySymbolEnum";

const initialState = {
  currencySymbol: currencySymbol.EURO,
};

const currencySymbolSlice = createSlice({
  name: "currencySymbol",
  initialState,
  reducers: {
    changeToNaira(state) {
      state.currencySymbol = currencySymbol.NAIRA;
    },

    changeToDollar(state) {
      state.currencySymbol = currencySymbol.DOLLAR;
    },

    changeToEuro(state) {
      state.currencySymbol = currencySymbol.EURO;
    },
  },
});

export const { changeToNaira, changeToEuro, changeToDollar } =
  currencySymbolSlice.actions;

export default currencySymbolSlice;
