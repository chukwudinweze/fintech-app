import { Box } from "@mui/system";
import React from "react";
import PageHeader from "../Global/PageHeader";
import Loan from "../components/Loan/Loan";
import { motion } from "framer-motion";

const LoanPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <PageHeader
          label="Quipay Loan"
          color="#fff"
          backgroundColor="#6236ff"
        />
        <Loan />
      </Box>
    </motion.div>
  );
};

export default LoanPage;
