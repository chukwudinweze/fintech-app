import { createSlice } from "@reduxjs/toolkit";

interface InterfaceSliceType {
  drawer: boolean;
}

const initialState: InterfaceSliceType = {
  drawer: false,
};

const uiStateSlice = createSlice({
  name: "currencySymbol",
  initialState,
  reducers: {
    activateDrawer(state) {
      state.drawer = true;
    },

    deActivateDrawer(state) {
      state.drawer = false;
    },
    toggleNav(state) {
      state.drawer = !state.drawer;
    },
  },
});

export const { activateDrawer, deActivateDrawer, toggleNav } =
  uiStateSlice.actions;

export default uiStateSlice;
