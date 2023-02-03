import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface pendingTxnType {
  amount: number;
  debitAccount: string;
  typeOfTnx: string;
  txnMonth: string;
  txnYear: number;
  txnDay: number;
  txnType: string;
  destinationAcct: string;
  ExchangeCurrencyFrom: string;
  ExchangeCurrencyTo: string;
}

const initialState: pendingTxnType = {
  amount: 0,
  debitAccount: "",
  destinationAcct: "",
  typeOfTnx: "",
  txnDay: 0,
  txnMonth: "",
  txnYear: 0,
  txnType: "",
  ExchangeCurrencyFrom: "",
  ExchangeCurrencyTo: "",
};

const pendingTransaction = createSlice({
  name: "pendingTransaction",
  initialState,
  reducers: {
    completedTxnAmount(state, action: PayloadAction<number>) {
      state.amount = action.payload;
    },
    getCreditedAcct(state, action: PayloadAction<string>) {
      state.debitAccount = action.payload;
    },

    completedTxnDay(state, action: PayloadAction<number>) {
      state.txnDay = action.payload;
    },
    completedTxnMonth(state, action: PayloadAction<string>) {
      state.txnMonth = action.payload;
    },
    completedTxnYear(state, action: PayloadAction<number>) {
      state.txnYear = action.payload;
    },
    completedTxnType(state, action: PayloadAction<string>) {
      state.txnType = action.payload;
    },
    creditedAccount(state, action: PayloadAction<string>) {
      state.destinationAcct = action.payload;
    },
    debitedAccount(state, action: PayloadAction<string>) {
      state.destinationAcct = action.payload;
    },
    ExchangedCrrencyFrom(state, action: PayloadAction<string>) {
      state.ExchangeCurrencyFrom = action.payload;
    },
    ExchangedCrrencyTo(state, action: PayloadAction<string>) {
      state.ExchangeCurrencyTo = action.payload;
    },
  },
});

export const {
  pendingTxnAmount,
  getDebitAccount,
  getDestinationAcct,
  getTxnMinutes,
  getTxnHour,
  getTxnDay,
  getTxnMonth,
  getTxnYear,
  getTxnType,
  getExchangeCrrencyFrom,
  getExchangeCrrencyTo,
} = pendingTransaction.actions;

export default pendingTransaction;
