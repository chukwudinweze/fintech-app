import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import TransactionList from "../../Global/TransactionList";
import { useAppSelector } from "../../store/hooks";

const TransactionHistory = () => {
  const transactions = useAppSelector((state) => state.completedTransactions);
  return (
    <Stack spacing={0.2}>
      {transactions &&
        transactions.map((transaction) => (
          <TransactionList key={transaction.id} {...transaction} />
        ))}
    </Stack>
  );
};

export default TransactionHistory;
