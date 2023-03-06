import React from "react";
import TopNavBar from "../components/TopNav/TopNavBar";
import TotalBalFundAccBtn from "../components/totalBalance/TotalBalFundAccBtn";
import TransactionMenu from "../components/mainTransactionChannels/TransactionMenu";
import Box from "@mui/material/Box";
import styles from "./DashBoard.module.css";
import AccountSummary from "../components/accountSummary/AccountSummary";
import Bills from "../components/Bills/Bills";
import SharedPaymets from "../components/SharedPayment/SharedPaymets";
import MyCards from "../components/Mycards/MyCards";
import Bookings from "../components/Bookings/Bookings";
import BottomNav from "../components/BottomNav/BottomNav";
import { motion } from "framer-motion";

const DashBoard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box alignContent="center" justifyContent="center">
        <TopNavBar />
        <Box sx={{ paddingLeft: "10px", paddingRight: "15px" }}>
          {/* TransactionChannels beggins */}
          <Box className={styles.DashBoard}>
            <TotalBalFundAccBtn />
            <TransactionMenu />
          </Box>
          {/* TransactionChannels beggins */}
          <AccountSummary />
          <Bills />
          {/* <ExperimentTwo /> */}

          <SharedPaymets />
          <Bookings />
          {/* <Experiment /> */}
          <MyCards />
          <BottomNav />
        </Box>
      </Box>
    </motion.div>
  );
};

export default DashBoard;
