import React from "react";
import Experiment from "../components/Experiment";
import TopNavBar from "../components/TopNavBar";
import TotalBalFundAccBtn from "../components/totalBalance/TotalBalFundAccBtn";
import TransactionMenu from "../components/TransactionMenu";
import Box from "@mui/material/Box";
import styles from "./DashBoard.module.css";

const DashBoard = () => {
  return (
    <Box alignContent="center" justifyContent="center">
      <TopNavBar />
      <Box className={styles.DashBoard}>
        <TotalBalFundAccBtn />
        <TransactionMenu />
      </Box>
      {/* <Experiment /> */}
    </Box>
  );
};

export default DashBoard;
