import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deActivateDrawer, toggleNav } from "../../store/InterfaceSlice";
import { currencySymbol } from "../../store/currencySymbolEnum";
import styles from "./FundAccountBtn.module.css";
import {
  getDebitAccount,
  getTxnType,
  pendingTxnAmount,
} from "../../store/pendingTransactionSlice";
import { bankAccounts } from "../../Global/bankAccounts";
import { typeOfTxn } from "../../Global/TypeOfTransaction";

type Anchor = "bottom";

const FundAccountBtn = () => {
  let defaultAcct = bankAccounts[0].account;
  const [state, setState] = React.useState({
    bottom: false,
  });

  const [amount, setAmount] = React.useState<number>(0);
  const [debitAccount, setDebitAccount] = React.useState<string>(defaultAcct);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ddd = useAppSelector((state) => state.userInterface.drawer);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        dispatch(toggleNav());
        return;
      }
      dispatch(toggleNav());
      setState({ ...state, [anchor]: open });
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("testing", amount, debitAccount);

    event.preventDefault();
    toggleDrawer("bottom", false);

    dispatch(pendingTxnAmount(amount));
    dispatch(getDebitAccount(debitAccount));
    dispatch(getTxnType(typeOfTxn.WALLET_FUNDING));
    dispatch(deActivateDrawer());
    navigate("/confirmtxn");
  };
  console.log(ddd);
  return (
    <div className={styles.drawar}>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            className={styles.FundAccountBtn}
          >
            <AddIcon className={styles.AddIcon} />
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box p={2}>
              <form onSubmit={handleSubmit}>
                <TextField
                  value={debitAccount}
                  onChange={(e) => setDebitAccount(e.target.value)}
                  sx={{ paddingTop: "20px" }}
                  id="select bank accounts"
                  select
                  label="From "
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  fullWidth
                >
                  {bankAccounts.map((option) => {
                    return (
                      <option key={option.name} value={option.account}>
                        {option.account}
                      </option>
                    );
                  })}
                </TextField>
                <TextField
                  InputProps={{
                    autoComplete: "off",
                    startAdornment: (
                      <InputAdornment position="start">
                        {currencySymbol.NAIRA}
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    paddingTop: "15px",
                    background: "#fff",
                    marginTop: "10px",
                  }}
                  id="standard-basic"
                  label="Amount"
                  variant="standard"
                  fullWidth
                  value={amount}
                  onChange={(e) => {
                    const value = +e.target.value;
                    if (!isNaN(value)) setAmount(value);
                  }}
                  helperText={
                    amount <= 0
                      ? "Enter a valid amount"
                      : amount >= 500_000
                      ? "daily limit exceeded"
                      : ""
                  }
                />
                <Box mt={4} mb={4} paddingTop="5px" paddingBottom="5px">
                  <Button
                    disabled={amount <= 0 || amount >= 500_000}
                    fullWidth
                    size="large"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Fund Wallet
                  </Button>
                </Box>
              </form>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FundAccountBtn;
