import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { currencySymbol } from "../../store/currencySymbolEnum";
import { useAppSelector } from "../../store/hooks";

const SharedPayNote = () => {
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
        Yes debit{" "}
        <Box component="span" color="#4e1dff">
          {currencySymbol.NAIRA} {pendingTxn.amount}.00
        </Box>{" "}
        for{" "}
        <Typography component="span" fontWeight={700} color="#000">
          {pendingTxn.initiator}
        </Typography>{" "}
        sharedpay.
      </Typography>
      <Typography variant="body1" component="p" color="#958d9e">
        Are you sure?
      </Typography>
    </Stack>
  );
};

export default SharedPayNote;
