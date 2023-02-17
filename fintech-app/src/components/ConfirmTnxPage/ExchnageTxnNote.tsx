import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useAppSelector } from "../../store/hooks";

const ExchnageTxnNote = () => {
  const pendingTxn = useAppSelector((state) => state.pendindTransaction);
  return (
    <Stack alignItems="center" justifyContent="center">
      <Typography variant="h6" fontWeight="700" gutterBottom>
        Verify this Transaction
      </Typography>
      <Typography
        textAlign="center"
        variant="body1"
        component="p"
        color="#958d9e"
      >
        Convert and fund my {pendingTxn.ExchangeCurrencyTo} acount with{" "}
        {pendingTxn.ExchangeCurrencyFrom}
        {pendingTxn.amount}
      </Typography>
      <Typography variant="body1" component="p" color="#958d9e">
        Are you sure?
      </Typography>
    </Stack>
  );
};

export default ExchnageTxnNote;
