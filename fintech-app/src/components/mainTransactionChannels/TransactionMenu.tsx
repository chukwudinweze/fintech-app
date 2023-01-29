import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { Stack } from "@mui/system";
import React from "react";
import TransactionBtn from "./TransactionBtn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WithdrawMoney from "./WithdrawMoney";
import TransferMoney from "./TransferMoney";
import CreditCards from "./CreditCards";
import ExchangeCurrency from "./ExchangeCurrency";

const TransactionMenu: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={5}
      alignItems="center"
      justifyContent="space-around"
      sx={{ borderTop: ".02px solid #d5d0dc", padding: "20px" }}
    >
      {/* <TransactionBtn
        background="#ff396f"
        label="Withdraw"
        icon={<ArrowDownward />}
      />
      <TransactionBtn
        background="#6236ff"
        label="Send"
        icon={<ArrowForwardIcon />}
      />
      <TransactionBtn
        background="#1dcc70"
        label="Cards"
        icon={<CreditCardIcon />}
      />
      <TransactionBtn
        background="#ffb400"
        label="Exchange"
        icon={<SyncAltIcon />}
      /> */}
      <WithdrawMoney />
      <TransferMoney />
      <ExchangeCurrency />
      <CreditCards />
    </Stack>
  );
};

export default TransactionMenu;
