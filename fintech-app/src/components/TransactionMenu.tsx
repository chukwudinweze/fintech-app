import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { Stack } from "@mui/system";
import React from "react";
import TransactionBtn from "./TransactionBtn";

const TransactionMenu: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={5}
      alignItems="center"
      justifyContent="space-between"
      sx={{ border: "1px solid red" }}
    >
      <TransactionBtn
        background="#ff396f"
        label="widraw"
        icon={<ArrowDownward />}
      />
      <TransactionBtn
        background="red"
        label="widraw"
        icon={<ArrowDownward />}
      />
      <TransactionBtn
        background="red"
        label="widraw"
        icon={<ArrowDownward />}
      />
      <TransactionBtn
        background="red"
        label="widraw"
        icon={<ArrowDownward />}
      />
    </Stack>
  );
};

export default TransactionMenu;
