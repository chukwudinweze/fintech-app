import { createSlice } from "@reduxjs/toolkit";

enum currencySymbol {
  NAIRA = "₦",
  DOLLAR = "$",
  EURO = "€",
}

const initialState = {
  currencySymbol: currencySymbol.NAIRA,
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
      state.currencySymbol = currencySymbol.DOLLAR;
    },
  },
});

export const { changeToNaira, changeToEuro, changeToDollar } =
  currencySymbolSlice.actions;

export default currencySymbolSlice;
