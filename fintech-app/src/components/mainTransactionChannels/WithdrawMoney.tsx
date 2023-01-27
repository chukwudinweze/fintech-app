import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { deActivateDrawer, toggleNav } from "../../store/InterfaceSlice";
import { currencySymbol } from "../../store/currencySymbolEnum";
import {
  getDestinationAcct,
  getTxnType,
  pendingTxnAmount,
} from "../../store/pendingTransactionSlice";
import { bankAccounts } from "../../Global/bankAccounts";
import { typeOfTxn } from "../../Global/TypeOfTransaction";
import TransactionBtn from "./TransactionBtn";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

type Anchor = "bottom";

const WithdrawMoney = () => {
  let defaultAcct = bankAccounts[0].account;
  const [state, setState] = React.useState({
    bottom: false,
  });

  const [amount, setAmount] = React.useState<number>(0);
  const [destinationAcct, setDestinationAcct] =
    React.useState<string>(defaultAcct);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
    event.preventDefault();
    toggleDrawer("bottom", false);

    dispatch(pendingTxnAmount(amount));
    dispatch(getDestinationAcct(destinationAcct));
    dispatch(getTxnType(typeOfTxn.WITHDRAWAL));
    dispatch(deActivateDrawer());
    navigate("/confirmtxn");
  };

  return (
    <div>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <TransactionBtn
            background="#ff396f"
            label="Withdraw"
            icon={<ArrowDownward />}
            onClick={toggleDrawer(anchor, true)}
          />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box p={2}>
              <form onSubmit={handleSubmit}>
                <TextField
                  value={destinationAcct}
                  onChange={(e) => setDestinationAcct(e.target.value)}
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

export default WithdrawMoney;
