import { Box } from "@mui/material";
import React from "react";
import PageHeader from "../Global/PageHeader";
import { motion } from "framer-motion";

const SharedPaymentPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <PageHeader
          label="Quishared Details"
          color="#fff"
          backgroundColor="#6236ff"
        />
      </Box>
    </motion.div>
  );
};

export default SharedPaymentPage;
