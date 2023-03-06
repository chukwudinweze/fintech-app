import { Avatar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import BottomNav from "../components/BottomNav/BottomNav";
import TransactionHistory from "../components/transactionHistory/TransactionHistory";
import PageHeader from "../Global/PageHeader";
import notification from "../assets/notification.png";
import { useAppSelector } from "../store/hooks";
import { motion } from "framer-motion";

const NotificationPage = () => {
  const transactions = useAppSelector((state) => state.completedTransactions);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Stack spacing={7}>
        <PageHeader
          label="Notifications"
          color="#fff"
          backgroundColor="#6236ff"
        />
        {transactions.length !== 0 ? (
          <Box>
            <Box padding="0 10px">
              <TransactionHistory />
            </Box>
            <BottomNav />
          </Box>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            minHeight="100vh"
            sx={{ background: "#fff" }}
            paddingTop="150px"
            width="100%"
          >
            <Stack
              spacing={2}
              width="100%"
              alignItems="center"
              padding="0 20px"
            >
              <Avatar
                alt="Remy Sharp"
                src={notification}
                sx={{
                  width: { xs: "150px", sm: "200px" },
                  height: { xs: "150px", sm: "200px" },
                  padding: "25px",
                  background: "#6236ff",
                  border: "1px solid #6236ff",
                }}
              />
              <Typography textAlign="center" variant="h6" fontWeight={700}>
                No Notification
              </Typography>
            </Stack>
          </Box>
        )}
      </Stack>
    </motion.div>
  );
};

export default NotificationPage;
