import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface sharedPayType {
  initiator: string;
  purpose: string;
  expringDate: string;
  amount: string;
  pending: boolean;
  id: string;
}

const initialState: sharedPayType[] = [
  {
    initiator: "Ciroma",
    purpose: "Mum's Birthday preparation",
    expringDate: "Expires 2nd Feb",
    amount: "9",
    pending: true,
    id: "123e589hg",
  },
  {
    initiator: "Chukwuma",
    purpose: "Aico Staff contribution",
    expringDate: "Expires 2nd Feb",
    amount: "11",
    pending: true,
    id: "3563e586hfg",
  },
  {
    initiator: "Adekunle",
    purpose: "Wedding Commitie",
    expringDate: "Expires 2nd Feb",
    amount: "21",
    pending: true,
    id: "1960e589it",
  },
];

const sharedtxnSlice = createSlice({
  name: "sharedTxn",
  initialState,
  reducers: {
    upDateTxnStatus(state, action: PayloadAction<string>) {
      return state.map((transaction) =>
        transaction.id === action.payload
          ? { ...transaction, pending: false }
          : transaction
      );
    },
  },
});

export const { upDateTxnStatus } = sharedtxnSlice.actions;

export default sharedtxnSlice;
