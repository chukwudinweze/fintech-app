import { Stack } from "@mui/system";
import React from "react";
import TransactionList from "../../Global/TransactionList";
import { typeOfTxn } from "../../Global/TypeOfTransaction";
import { useAppSelector } from "../../store/hooks";

const Expense = () => {
  const transactions = useAppSelector((state) => state.completedTransactions);
  return (
    <Stack
      spacing={0.2}
      width="100%"
      padding={{ xs: "0 10px", sm: "0 15px", lg: "0 30px" }}
    >
      {transactions &&
        transactions.map(
          (transaction) =>
            !transaction.typeOfTxn && (
              <TransactionList key={transaction.id} {...transaction} />
            )
        )}
    </Stack>
  );
};

export default Expense;
