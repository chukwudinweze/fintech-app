import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { InputAdornment, TextField, Typography } from "@mui/material";
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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Anchor = "bottom";

const TransferMoney = () => {
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [amount, setAmount] = React.useState<number>(0);
  const [destinationAcct, setDestinationAcct] = React.useState<string>("");
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

    // convert destination account to string as to match the type in the redux store
    const formatDestAcct = destinationAcct!.toString();

    dispatch(pendingTxnAmount(amount));
    dispatch(getDestinationAcct(formatDestAcct));
    dispatch(getTxnType(typeOfTxn.TRANSFER));
    dispatch(deActivateDrawer());
    navigate("/confirmtxn");
  };

  return (
    <div>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <TransactionBtn
            background="#6236ff"
            label="Send"
            icon={<ArrowForwardIcon />}
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
                <Box sx={{ marginBottom: "20px", color: "#6236ff" }}>
                  <Typography variant="body1" component="p">
                    Test Account: 2460965789
                  </Typography>
                </Box>

                <TextField
                  InputProps={{
                    autoComplete: "off",
                    inputProps: { maxLength: 10 },
                  }}
                  sx={{
                    paddingTop: "15px",
                    background: "#fff",
                    marginTop: "10px",
                  }}
                  id="standard-basic"
                  label="Beneficiary Account"
                  variant="standard"
                  fullWidth
                  value={destinationAcct}
                  type="number"
                  //   onChange={(e) => {
                  //     const value = +e.target.value;
                  //     if (!isNaN(value)) setDestinationAcct(value);
                  //   }}
                  onChange={(e) => {
                    const re = /^[0-9\b]+$/;
                    if (e.target.value === "" || re.test(e.target.value)) {
                      setDestinationAcct(e.target.value);
                    }
                  }}
                  //   pattern="[0-9]*"
                  helperText={
                    destinationAcct === ""
                      ? ""
                      : destinationAcct !== "2460965789"
                      ? "Invalid Account"
                      : destinationAcct === "2460965789"
                      ? "Chukwudi Nweze"
                      : ""
                  }
                />
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
                  label=""
                  variant="standard"
                  fullWidth
                  value={amount}
                  onChange={(e) => {
                    const value = +e.target.value;
                    if (!isNaN(value)) setAmount(value);
                  }}
                  helperText={
                    amount <= 0
                      ? "Enter a valid Amount"
                      : amount >= 500_000
                      ? "daily limit exceeded"
                      : ""
                  }
                />

                <Box mt={4} mb={4} paddingTop="5px" paddingBottom="5px">
                  <Button
                    disabled={
                      amount <= 0 ||
                      amount >= 500_000 ||
                      destinationAcct !== "2460965789"
                    }
                    fullWidth
                    size="large"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Send Money
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

export default TransferMoney;
