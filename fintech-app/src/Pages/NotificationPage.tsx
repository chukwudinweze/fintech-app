import { Box, Stack } from "@mui/system";
import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import ExperimentTwo from "../components/ExperimentTwo";
import TransactionHistory from "../components/transactionHistory/TransactionHistory";
import PageHeader from "../Global/PageHeader";
const NotificationPage = () => {
  return (
    <Stack spacing={7}>
      <PageHeader
        label="Notifications"
        color="#fff"
        backgroundColor="#6236ff"
      />
      <Box>
        <Box padding="0 10px">
          <TransactionHistory />
        </Box>
        <BottomNav />
      </Box>
    </Stack>
  );
};

export default NotificationPage;
