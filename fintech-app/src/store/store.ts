import { configureStore } from "@reduxjs/toolkit";
import completedTxnSlice from "./completedTxnSlice";
import currencySymbolSlice from "./currencyModelSlice";
import dollarAccount from "./dollarAccountSlice";
import euroAccount from "./euroAccount";
import totalExpensesSlice from "./ExpensesSlice";
import uiStateSlice from "./InterfaceSlice";
import nairaAccount from "./nairaAccountSlice";
import pendingTransaction from "./pendingTransactionSlice";

const store = configureStore({
  reducer: {
    nairaAccount: nairaAccount.reducer,
    dollarAccount: dollarAccount.reducer,
    euroAccount: euroAccount.reducer,
    currency: currencySymbolSlice.reducer,
    userInterface: uiStateSlice.reducer,
    pendindTransaction: pendingTransaction.reducer,
    completedTransactions: completedTxnSlice.reducer,
    totalExpenses: totalExpensesSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
