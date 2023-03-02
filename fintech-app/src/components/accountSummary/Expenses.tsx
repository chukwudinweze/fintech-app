import { Box } from "@mui/material";
import PageHeader from "../../Global/PageHeader";
import { useAppSelector } from "../../store/hooks";
import Expense from "./Expense";
import PieChart from "./PieChart";
import NoTxnRecord from "../../Global/NoTxnRecord";

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
          <NoTxnRecord />
        )}
      </Box>
    </>
  );
}
