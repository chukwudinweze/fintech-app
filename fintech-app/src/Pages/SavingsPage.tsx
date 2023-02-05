import { Box } from "@mui/system";
import React from "react";
import Savings from "../components/Savings/Savings";
import PageHeader from "../Global/PageHeader";

const SavingsPage = () => {
  return (
    <Box>
      <PageHeader
        label="Regular Savings"
        color="#fff"
        backgroundColor="#6236ff"
      />
      <Savings />
    </Box>
  );
};

export default SavingsPage;
