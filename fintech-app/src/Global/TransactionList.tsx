import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { currencySymbol } from "../store/currencySymbolEnum";
import { typeOfTxn } from "./TypeOfTransaction";

type propType = {
  label: string;
  amount: number;
  date: string;
  typeOfTxn?: string;
  currency: string;
};

const TransactionList: React.FC<propType> = ({
  label,
  amount,
  date,
  typeOfTxn: txnType,
  currency,
}) => {
  return (
    <Paper sx={{ padding: "20px", width: "100%" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>{label}</Typography>
        <Typography
          color={txnType === typeOfTxn.WALLET_FUNDING ? "#1dcc70" : "#ff396f"}
        >
          {txnType === typeOfTxn.WALLET_FUNDING
            ? `+${currency}`
            : `-${currency}`}
          {amount}
        </Typography>
      </Stack>
      <Typography fontSize="12px" color="#a3a0a0">
        {date}
      </Typography>
    </Paper>
  );
};

export default TransactionList;
