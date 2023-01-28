import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { currencySymbol } from "../../store/currencySymbolEnum";
import { useAppSelector } from "../../store/hooks";

const FundWalletNote = () => {
  const pendingTxn = useAppSelector((state) => state.pendindTransaction);

  return (
    <Stack alignItems="center" justifyContent="center">
      <Typography variant="h6" fontWeight="700" gutterBottom>
        Verify this Transaction
      </Typography>
      <Typography variant="body1" component="p" color="#958d9e">
        You are sending{" "}
        <Box component="span" color="#4e1dff">
          {currencySymbol.NAIRA} {pendingTxn.amount}.00
        </Box>{" "}
        to Your Quipay wallet.
      </Typography>
      <Typography variant="body1" component="p" color="#958d9e">
        Are you sure?
      </Typography>
    </Stack>
  );
};

export default FundWalletNote;
