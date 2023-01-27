import { Box, Stack } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { currencySymbol } from "../../store/currencySymbolEnum";
import accessBankLogo from "../../assets/accessBankLogo.png";
import styles from "./ConfirmTnxTemplate.module.css";
import { useNavigate } from "react-router-dom";
import CancelTransaction from "./CancelTransaction";
import ConfirmTransactionBtn from "./ConfirmTransaction";
import { useAppSelector } from "../../store/hooks";
import { BankLogo } from "./AccountLogo";

const ConfirmTnxTemplate = () => {
  const amount = useAppSelector((state) => state.pendindTransaction.amount);
  const debit = useAppSelector(
    (state) => state.pendindTransaction.debitAccount
  );

  console.log("debit", amount, debit);

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
        <BankLogo src={accessBankLogo} label="" />
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
              {currencySymbol.NAIRA} {amount}.00
            </Typography>
          </Stack>
        </div>
        <Avatar
          sx={{
            width: 60,
            height: 60,
            borderRadius: "10px",
            background: "#4e1dff",
          }}
          variant="square"
        >
          <Stack alignItems="center" justifyContent="center">
            <Typography fontSize="14px"> Quipay</Typography>
            <Typography fontSize="12px"> Wallet</Typography>
          </Stack>
        </Avatar>
      </Stack>
      <Stack alignItems="center" justifyContent="center">
        <Typography variant="h6" fontWeight="700" gutterBottom>
          Verify this Transaction
        </Typography>
        <Typography variant="body1" component="p" color="#958d9e">
          You are sending{" "}
          <Box component="span" color="#4e1dff">
            {currencySymbol.NAIRA} {amount}.00
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
