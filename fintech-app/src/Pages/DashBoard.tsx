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

const DashBoard = () => {
  return (
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
  );
};

export default DashBoard;
