import { Box } from "@mui/system";
import React from "react";
import ConfirmTnxTemplate from "../components/ConfirmTnxPage/ConfirmTnxTemplate";
import { motion } from "framer-motion";

const ConfirmTxnPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box component="section">
        <ConfirmTnxTemplate />
      </Box>
    </motion.div>
  );
};

export default ConfirmTxnPage;
