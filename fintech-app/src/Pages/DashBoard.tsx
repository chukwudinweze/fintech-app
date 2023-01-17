import React from "react";
import Experiment from "../components/Experiment";
import TopNavBar from "../components/TopNavBar";
import TotalBalFundAccBtn from "../components/totalBalance/TotalBalFundAccBtn";
import TransactionMenu from "../components/mainTransactionChannels/TransactionMenu";
import Box from "@mui/material/Box";
import styles from "./DashBoard.module.css";
import AccountSummary from "../components/accountSummary/AccountSummary";
import ExperimentTwo from "../components/ExperimentTwo";
import Bills from "../components/Bills/Bills";
import SharedPayment from "../components/SharedPayment/SharedPayment";
import SharedPaymets from "../components/SharedPayment/SharedPaymets";
import MyCards from "../components/Mycards/MyCards";

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
        <SharedPaymets />
        <MyCards />
        {/* <Experiment /> */}
        {/* <ExperimentTwo /> */}
      </Box>
    </Box>
  );
};

export default DashBoard;
