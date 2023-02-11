import { Avatar, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import PageHeader from "../../Global/PageHeader";
import { useAppSelector } from "../../store/hooks";
import Expense from "./Expense";
import PieChart from "./PieChart";
import noTransactionImg from "../../assets/no-credit-card.png";
import { Link } from "react-router-dom";

export default function App() {
  const transactions = useAppSelector((state) => state.completedTransactions);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        minHeight="100vh"
        bgcolor={transactions.length !== 0 ? "#6236ff" : "#fff"}
        sx={{
          width: "100%",
        }}
      >
        <PageHeader
          label="Your Expenses"
          color={transactions.length !== 0 ? "#fff" : "#6236ff"}
        />
        {transactions.length !== 0 ? (
          <Box sx={{ width: "100%" }}>
            <PieChart />
            <Expense />
          </Box>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            minHeight="100vh"
            sx={{ background: "#fff" }}
            paddingTop="150px"
          >
            <Stack
              spacing={2}
              width="100%"
              alignItems="center"
              padding="0 20px"
            >
              <Avatar
                alt="Remy Sharp"
                src={noTransactionImg}
                sx={{
                  width: { xs: "150px", sm: "200px" },
                  height: { xs: "150px", sm: "200px" },
                  padding: "5px",
                  background: "#6236ff",
                  border: "1px solid #6236ff",
                }}
              />
              <Typography textAlign="center" variant="h6" fontWeight={700}>
                No Transaction Recorded Yet
              </Typography>
              <Box textAlign="center">
                <Typography variant="body1">
                  Get started with Quickpay by funding your account. Withdraw,
                  transfer, exchange currency, and pay bills easily.
                  <Typography fontWeight="700" color="#6236ff">
                    <Link color="#6236ff" to="/">
                      Start now!
                    </Link>
                  </Typography>
                </Typography>
              </Box>
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}
