import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { currencySymbol } from "../../store/currencySymbolEnum";
import accessBankLogo from "../../assets/accessBankLogo.png";
import UBALogo from "../../assets/UBALogo.png";
import styles from "./ConfirmTnxTemplate.module.css";
import { useNavigate } from "react-router-dom";
import CancelTransaction from "./CancelTransaction";
import ConfirmTransactionBtn from "./ConfirmTransaction";
import { useAppSelector } from "../../store/hooks";
import { BankLogo, QuiPayLogo } from "./AccountLogo";
import { bankAccounts } from "../../Global/bankAccounts";
import { typeOfTxn } from "../../Global/TypeOfTransaction";
import WithdrawNote from "./WithdrawNote";
import FundWalletNote from "./FundWalletNote";

const ConfirmTnxTemplate = () => {
  const pendingTxn = useAppSelector((state) => state.pendindTransaction);

  let debitAcctLogo;
  let creditAcctLogo;

  if (pendingTxn.txnType === typeOfTxn.WALLET_FUNDING) {
    if (pendingTxn.debitAccount === bankAccounts[0].account) {
      debitAcctLogo = <BankLogo src={accessBankLogo} label="acess Bank logo" />;
    } else if (pendingTxn.debitAccount === bankAccounts[1].account) {
      debitAcctLogo = <BankLogo src={UBALogo} label="UBA logo" />;
    }
    creditAcctLogo = <QuiPayLogo />;
  } else if (pendingTxn.txnType === typeOfTxn.WITHDRAWAL) {
    debitAcctLogo = <QuiPayLogo />;
    if (pendingTxn.destinationAcct === bankAccounts[0].account) {
      creditAcctLogo = (
        <BankLogo src={accessBankLogo} label="acess Bank logo" />
      );
    } else {
      creditAcctLogo = <BankLogo src={UBALogo} label="UBA logo" />;
    }
  } else {
    // Handle other types of transactions
  }

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        paddingTop: "50px",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      <Box
        textAlign="center"
        sx={{ marginBottom: { xs: "70px", sm: "60px", lg: "10px" } }}
      >
        <Typography variant="h5">Transaction Verification</Typography>
      </Box>
      <Stack
        style={{
          padding: "30px 10px",
        }}
        alignItems="center"
        direction="row"
        spacing={2}
      >
        {/* originating account logo or debit account logo */}
        {debitAcctLogo}
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
          <div className={styles.arrow}></div>
          <Stack
            alignItems="center"
            justifyContent="center"
            className={styles.text}
          >
            <Typography fontSize="11px"> Amount</Typography>
            <Typography fontWeight="600" sx={{ fontSize: "20px" }}>
              {currencySymbol.NAIRA} {pendingTxn.amount}.00
            </Typography>
          </Stack>
        </div>
        {/* credit account logo comes after the arrow head in the confirmation page */}
        {creditAcctLogo}
      </Stack>
      {pendingTxn.txnType === typeOfTxn.WITHDRAWAL && <WithdrawNote />}
      {pendingTxn.txnType === typeOfTxn.WALLET_FUNDING && <FundWalletNote />}
      <Stack
        spacing={2}
        direction="row"
        sx={{ marginTop: "200px", padding: "0 20px" }}
      >
        {/* complete/cancel transaction whe this two button components are clicked */}
        <CancelTransaction />
        <ConfirmTransactionBtn />
      </Stack>
    </Box>
  );
};

export default ConfirmTnxTemplate;
