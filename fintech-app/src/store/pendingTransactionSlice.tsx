import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type dateValueType = {
  monthValue: number;
  yearValue: number;
  hourValue: number;
  minutesValue: number;
  dayValue: number;
};

type bookingType = {
  date: dateValueType;
  departFrom: string;
  departTo: string;
  seatNo: string;
  price: number;
  backgroundImg: string;
  label: string;
};
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
  ExchangeCurrencyFrom: string;
  ExchangeCurrencyTo: string;
  initiator: string;
  id: string;
  label: string;
  booking: bookingType;
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
  ExchangeCurrencyFrom: "",
  ExchangeCurrencyTo: "",
  initiator: "",
  id: "",
  label: "",
  booking: {
    date: {
      monthValue: 0,
      yearValue: 0,
      hourValue: 0,
      minutesValue: 0,
      dayValue: 0,
    },
    departFrom: "",
    departTo: "",
    seatNo: "",
    price: 0,
    backgroundImg: "",
    label: "",
  },
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
    getExchangeCrrencyFrom(state, action: PayloadAction<string>) {
      state.ExchangeCurrencyFrom = action.payload;
    },
    getExchangeCrrencyTo(state, action: PayloadAction<string>) {
      state.ExchangeCurrencyTo = action.payload;
    },
    getInitiator(state, action: PayloadAction<string>) {
      state.initiator = action.payload;
    },
    getTxnId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    getTxnLabel(state, action: PayloadAction<string>) {
      state.label = action.payload;
    },
    getBookingInfo(state, action: PayloadAction<bookingType>) {
      state.booking = action.payload;
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
  getInitiator,
  getTxnId,
  getTxnLabel,
  getBookingInfo,
} = pendingTransaction.actions;

export default pendingTransaction;
