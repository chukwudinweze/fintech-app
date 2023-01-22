import { configureStore } from "@reduxjs/toolkit";
import currencySymbolSlice from "./currencyModelSlice";
import dollarAccount from "./dollarAccountSlice";
import euroAccount from "./euroAccount";
import uiStateSlice from "./InterfaceSlice";
import nairaAccount from "./nairaAccountSlice";

const store = configureStore({
  reducer: {
    nairaAccount: nairaAccount.reducer,
    dollarAccount: dollarAccount.reducer,
    euroAccount: euroAccount.reducer,
    currency: currencySymbolSlice.reducer,
    userInterface: uiStateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
