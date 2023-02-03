import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { currencySymbol } from "../store/currencySymbolEnum";

const TransactionList = () => {
  return (
    <Paper sx={{ padding: "20px", width: "100%" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>Quickpay transfer</Typography>
        <Typography>- {currencySymbol.NAIRA}200</Typography>
      </Stack>
    </Paper>
  );
};

export default TransactionList;
