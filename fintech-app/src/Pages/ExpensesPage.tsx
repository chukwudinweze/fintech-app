import { Box } from "@chakra-ui/react";
import React from "react";
import Expenses from "../components/accountSummary/Expenses";
import { motion } from "framer-motion";

const ExpensesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <Expenses />
      </Box>
    </motion.div>
  );
};

export default ExpensesPage;
