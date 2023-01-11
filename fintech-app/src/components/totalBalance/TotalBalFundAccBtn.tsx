import React from "react";
import Stack from "@mui/material/Stack";
import TotalBalance from "./TotalBalance";
import FundAccountBtn from "./FundAccountBtn";

const TotalBalFundAccBtn = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        paddingTop: "30px",
        paddingLeft: "18px",
        paddingRight: "35px",
        paddingBottom: "18px",
      }}
    >
      <TotalBalance />
      <FundAccountBtn />
    </Stack>
  );
};

export default TotalBalFundAccBtn;
