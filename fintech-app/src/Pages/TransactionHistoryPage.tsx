import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import NoTxnHistory from "../components/transactionHistory/NoTxnHistory";
import TransactionHistory from "../components/transactionHistory/TransactionHistory";
import PageHeader from "../Global/PageHeader";
import { useAppSelector } from "../store/hooks";
import { motion } from "framer-motion";

const TransactionHistoryPage = () => {
  const transactions = useAppSelector((state) => state.completedTransactions);
  const isempty = transactions.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        bgcolor={isempty ? "#fff" : "#6236ff"}
        component="section"
        sx={{
          minHeight: "100vh",
          padding: { xs: "0 10px 20px 10px", sm: "0 30px 100px 30px" },
        }}
      >
        <Stack spacing={6}>
          <PageHeader
            label="Transaction History"
            color={isempty ? "#6236ff" : "#fff"}
          />
          {isempty ? <NoTxnHistory /> : <TransactionHistory />}
          <BottomNav />
        </Stack>
      </Box>
    </motion.div>
  );
};

export default TransactionHistoryPage;
