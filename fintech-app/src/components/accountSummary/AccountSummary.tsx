import React from "react";
import { Grid, Box } from "@mui/material";
import AcctSummaryLayout from "./AcctSummaryLayout";

const AccountSummary = () => {
  // let naira symbol depend on the symbol of the balance
  return (
    <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AcctSummaryLayout
            label="Income"
            amount={552.95}
            color="#1dcc70"
            pageLink="/savings"
          />
        </Grid>
        <Grid item xs={6}>
          <AcctSummaryLayout
            label="Expenses"
            amount={86.45}
            color="#ff396f"
            pageLink="/totalexpenses"
          />
        </Grid>
        <Grid item xs={6}>
          <AcctSummaryLayout
            label="Savings"
            amount={120.99}
            color="#000000"
            pageLink="/totalexpenses"
          />
        </Grid>
        <Grid item xs={6}>
          <AcctSummaryLayout
            label="Total Bills"
            amount={53.25}
            color="#000000"
            pageLink="/totalexpenses"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountSummary;
