import { Box } from "@mui/material";
import React from "react";
import PageHeader from "../../Global/PageHeader";
import TransactionList from "../../Global/TransactionList";
import Experiment from "../Experiment";
import PieChart from "./PieChart";

export default function App() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        minHeight="100vh"
        sx={{
          background: "#6236ff",
          width: "100%",
        }}
      >
        <PageHeader label="Expenses" />
        <PieChart />
        <TransactionList />
      </Box>
    </>
  );
}
