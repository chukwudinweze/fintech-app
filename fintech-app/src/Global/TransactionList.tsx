import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { currencySymbol } from "../store/currencySymbolEnum";

type propType = {
  label: string;
  amount: number;
  date: string;
};

const TransactionList: React.FC<propType> = ({ label, amount, date }) => {
  return (
    <Paper sx={{ padding: "20px", width: "100%" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>{label}</Typography>
        <Typography color="#ff396f">
          - {currencySymbol.NAIRA}
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
