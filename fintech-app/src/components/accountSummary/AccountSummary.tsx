import { Grid, Box } from "@mui/material";
import AcctSummaryLayout from "./AcctSummaryLayout";
import { useAppSelector } from "../../store/hooks";

const AccountSummary = () => {
  let { naira, dollar, euro } = useAppSelector((state) => state.totalExpenses);
  const { amount } = useAppSelector((state) => state.totalFund);

  // convert naira to dollar before adding together
  naira = naira / 300;
  const totalExpense = (naira + dollar + euro).toPrecision(1);
  // let naira symbol depend on the symbol of the balance
  return (
    <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AcctSummaryLayout
            label="Total Funded"
            amount={+amount.toPrecision(1)}
            color="#1dcc70"
            pageLink="/savings"
          />
        </Grid>
        <Grid item xs={6}>
          <AcctSummaryLayout
            label="Expenses"
            amount={+totalExpense}
            color="#ff396f"
            pageLink="/totalexpenses"
          />
        </Grid>
        <Grid item xs={6}>
          <AcctSummaryLayout
            label="Savings"
            amount={0}
            color="#000000"
            pageLink="/quipaysavings"
          />
        </Grid>
        <Grid item xs={6}>
          <AcctSummaryLayout
            label="Loan"
            amount={0}
            color="#000000"
            pageLink="/quipayloan"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountSummary;
