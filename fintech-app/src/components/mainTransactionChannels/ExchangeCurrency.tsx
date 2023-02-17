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
  getTxnType,
  pendingTxnAmount,
  getExchangeCrrencyFrom,
  getExchangeCrrencyTo,
} from "../../store/pendingTransactionSlice";
import { typeOfTxn } from "../../Global/TypeOfTransaction";
import TransactionBtn from "./TransactionBtn";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

type Anchor = "bottom";

const ExchangeCurrency = () => {
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [currencyFrom, setCurrencyFrom] = React.useState<string>(
    currencySymbol.NAIRA
  );
  const [currencyTo, setCurrencyTo] = React.useState<string>(
    currencySymbol.DOLLAR
  );
  const [amount, setAmount] = React.useState<number>(0);

  const options = [
    { value: currencySymbol.NAIRA, label: "Naira" },
    { value: currencySymbol.DOLLAR, label: "Dollar" },
    { value: currencySymbol.EURO, label: "Euro" },
  ];

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
    dispatch(getTxnType(typeOfTxn.EXCHAGE));
    dispatch(getExchangeCrrencyFrom(currencyFrom));
    dispatch(getExchangeCrrencyTo(currencyTo));
    dispatch(deActivateDrawer());
    console.log(currencyFrom, currencyTo);

    navigate("/confirmtxn");
  };

  return (
    <div>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <TransactionBtn
            background="#ffb400"
            label="Exchange"
            icon={<SyncAltIcon />}
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
                  value={currencyFrom}
                  onChange={(e) => setCurrencyFrom(e.target.value)}
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
                  <option value={currencySymbol.NAIRA}>Naira</option>
                  <option value={currencySymbol.DOLLAR}>Dollar</option>
                  <option value={currencySymbol.EURO}>Euro</option>
                </TextField>
                <TextField
                  value={currencyTo}
                  onChange={(e) => setCurrencyTo(e.target.value)}
                  sx={{ paddingTop: "20px" }}
                  id="select bank accounts"
                  select
                  label="To "
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  fullWidth
                >
                  {/* filter opeions that is not equal to currencyFrom  */}
                  {/* and display the remaining option */}
                  {options
                    .filter((option) => option.value !== currencyFrom)
                    .map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        selected={currencyTo === option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                </TextField>
                <TextField
                  InputProps={{
                    autoComplete: "off",
                    startAdornment: (
                      <InputAdornment position="start">
                        {currencyFrom === currencySymbol.NAIRA &&
                          currencySymbol.NAIRA}
                        {currencyFrom === currencySymbol.DOLLAR &&
                          currencySymbol.DOLLAR}
                        {currencyFrom === currencySymbol.EURO &&
                          currencySymbol.EURO}
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
                    {currencyTo === currencySymbol.DOLLAR && "Convert to USD"}
                    {currencyTo === currencySymbol.EURO && "Convert to EURO"}
                    {currencyTo === currencySymbol.NAIRA && "Convert to Naira"}
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

export default ExchangeCurrency;
