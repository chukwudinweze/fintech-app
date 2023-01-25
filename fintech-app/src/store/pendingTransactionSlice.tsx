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
}

const initialState: pendingTxnType = {
  amount: 0,
  debitAccount: "",
  typeOfTnx: "",
  txnMinutes: 0,
  txnHour: 0,
  txnDay: 0,
  txnMonth: "",
  txnYear: 0,
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
  },
});

export const {
  pendingTxnAmount,
  getDebitAccount,
  getTxnMinutes,
  getTxnHour,
  getTxnDay,
  getTxnMonth,
  getTxnYear,
} = pendingTransaction.actions;

export default pendingTransaction;
