import { Box } from "@mui/system";
import React from "react";
import Savings from "../components/Savings/Savings";
import PageHeader from "../Global/PageHeader";
import { motion } from "framer-motion";

const SavingsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {" "}
      <Box>
        <PageHeader
          label="Regular Savings"
          color="#fff"
          backgroundColor="#6236ff"
        />
        <Savings />
      </Box>
    </motion.div>
  );
};

export default SavingsPage;
