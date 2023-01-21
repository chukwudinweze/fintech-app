// import { useSelector, TypedUseSelectorHook } from "react-redux";
// import { useDispatch } from "react-redux/es/exports";
import { configureStore } from "@reduxjs/toolkit";
import currencySymbolSlice from "./currencyModelSlice";
import dollarAccount from "./dollarAccountSlice";
import euroAccount from "./euroAccount";
import nairaAccount from "./nairaAccountSlice";

const store = configureStore({
  reducer: {
    nairaAccount: nairaAccount.reducer,
    dollarAccount: dollarAccount.reducer,
    euroAccount: euroAccount.reducer,
    currency: currencySymbolSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
