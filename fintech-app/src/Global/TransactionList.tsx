import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { currencySymbol } from "../store/currencySymbolEnum";

const TransactionList = () => {
  return (
    <Paper sx={{ padding: "20px", width: "100%" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>Quickpay transfer</Typography>
        <Typography color="#1dcc70">- {currencySymbol.NAIRA}200</Typography>
      </Stack>
      <Typography fontSize="12px" color="#a3a0a0">
        Jan 3, 2023
      </Typography>
    </Paper>
  );
};

export default TransactionList;
