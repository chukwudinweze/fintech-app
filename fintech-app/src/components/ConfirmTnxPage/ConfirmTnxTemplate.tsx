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

const ConfirmTnxTemplate = () => {
  const pendingTxn = useAppSelector((state) => state.pendindTransaction);

  console.log(pendingTxn.txnType);
  console.log(pendingTxn.amount);

  let acctLogo =
    pendingTxn.txnType === typeOfTxn.WALLET_FUNDING &&
    pendingTxn.debitAccount === bankAccounts[0].account ? (
      <BankLogo src={accessBankLogo} label="acess Bank logo" />
    ) : (
      <BankLogo src={UBALogo} label="UBA logo" />
    );

  return (
    <Box sx={{ width: "100%", position: "relative", paddingTop: "50px" }}>
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
        {acctLogo}
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
        {/* Quipay logo */}
        <QuiPayLogo />
      </Stack>
      <Stack alignItems="center" justifyContent="center">
        <Typography variant="h6" fontWeight="700" gutterBottom>
          Verify this Transaction
        </Typography>
        <Typography variant="body1" component="p" color="#958d9e">
          You are sending{" "}
          <Box component="span" color="#4e1dff">
            {currencySymbol.NAIRA} {pendingTxn.amount}.00
          </Box>{" "}
          to Your Quipay wallet.
        </Typography>
        <Typography variant="body1" component="p" color="#958d9e">
          Are you sure?
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{ marginTop: "200px", padding: "0 20px" }}
      >
        <CancelTransaction />
        <ConfirmTransactionBtn />
      </Stack>
    </Box>
  );
};

export default ConfirmTnxTemplate;
