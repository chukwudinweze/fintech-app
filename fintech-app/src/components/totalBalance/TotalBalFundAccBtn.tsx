import React from "react";
import Stack from "@mui/material/Stack";
import TotalBalance from "./TotalBalance";
import FundAccountBtn from "./FundAccountBtn";

const TotalBalFundAccBtn = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <TotalBalance />
      <FundAccountBtn />
    </Stack>
  );
};

export default TotalBalFundAccBtn;
