import React from "react";
import Experiment from "../components/Experiment";
import TopNavBar from "../components/TopNavBar";
import TotalBalance from "../components/totalBalance/TotalBalance";
import TotalBalFundAccBtn from "../components/totalBalance/TotalBalFundAccBtn";
import TransactionMenu from "../components/TransactionMenu";

const HomePage = () => {
  return (
    <div>
      <TopNavBar />
      <TotalBalFundAccBtn />
      <TransactionMenu />
      {/* <Experiment /> */}
    </div>
  );
};

export default HomePage;
