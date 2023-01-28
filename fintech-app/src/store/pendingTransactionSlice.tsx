import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface pendingTxnType {
  amount: number;
  debitAccount: string;
  typeOfTnx: string;
  txnMinutes: number;
  txnHour: number;
  txnMonth: string;
  txnYear: number;
  txnDay: number;
  txnType: string;
  destinationAcct: string;
}

const initialState: pendingTxnType = {
  amount: 0,
  debitAccount: "",
  destinationAcct: "",
  typeOfTnx: "",
  txnMinutes: 0,
  txnHour: 0,
  txnDay: 0,
  txnMonth: "",
  txnYear: 0,
  txnType: "",
};

const pendingTransaction = createSlice({
  name: "pendingTransaction",
  initialState,
  reducers: {
    pendingTxnAmount(state, action: PayloadAction<number>) {
      state.amount = action.payload;
    },
    getDebitAccount(state, action: PayloadAction<string>) {
      state.debitAccount = action.payload;
    },
    getTxnMinutes(state, action: PayloadAction<number>) {
      state.txnMinutes = action.payload;
    },
    getTxnHour(state, action: PayloadAction<number>) {
      state.txnHour = action.payload;
    },
    getTxnDay(state, action: PayloadAction<number>) {
      state.txnDay = action.payload;
    },
    getTxnMonth(state, action: PayloadAction<string>) {
      state.txnMonth = action.payload;
    },
    getTxnYear(state, action: PayloadAction<number>) {
      state.txnYear = action.payload;
    },
    getTxnType(state, action: PayloadAction<string>) {
      state.txnType = action.payload;
    },
    getDestinationAcct(state, action: PayloadAction<string>) {
      state.destinationAcct = action.payload;
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
} = pendingTransaction.actions;

export default pendingTransaction;