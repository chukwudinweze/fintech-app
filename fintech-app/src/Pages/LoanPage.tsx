import { Box } from "@mui/system";
import React from "react";
import PageHeader from "../Global/PageHeader";
import Loan from "../components/Loan/Loan";

const LoanPage = () => {
  return (
    <Box>
      <PageHeader label="Quipay Loan" color="#fff" backgroundColor="#6236ff" />
      <Loan />
    </Box>
  );
};

export default LoanPage;
