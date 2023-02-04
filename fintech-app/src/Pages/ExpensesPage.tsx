import { Box } from "@chakra-ui/react";
import React from "react";
import SavingsChart from "../components/accountSummary/Expenses";
import BottomNav from "../components/BottomNav/BottomNav";

const SavingsChartPage = () => {
  return (
    <Box>
      <SavingsChart />
      <BottomNav />
    </Box>
  );
};

export default SavingsChartPage;
