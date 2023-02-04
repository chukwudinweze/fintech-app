import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TransactionHistory from "../components/transactionHistory/TransactionHistory";
import PageHeader from "../Global/PageHeader";

const TransactionHistoryPage = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        background: "#6236ff",
        padding: { xs: "0 10px", sm: "0 30px" },
      }}
    >
      <Stack spacing={10}>
        <PageHeader label="Transaction History" />
        <TransactionHistory />
      </Stack>
    </Box>
  );
};

export default TransactionHistoryPage;
