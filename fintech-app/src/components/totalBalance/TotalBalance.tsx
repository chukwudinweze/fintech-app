import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { currencySymbol } from "../../store/currencySymbolEnum";
import {
  changeToDollar,
  changeToEuro,
  changeToNaira,
} from "../../store/currencyModelSlice";
import SubHeading from "../../Global/SubHeading";

const TotalBalance = () => {
  const [hideBalance, setHideBalance] = useState<boolean>(false);
  // get total balance of each currency
  const nairaBalance = useAppSelector((state) => state.nairaAccount.balance);
  const dollarBalance = useAppSelector((state) => state.dollarAccount.balance);
  const euroBalance = useAppSelector((state) => state.euroAccount.balance);
  // get currency mode
  const currency = useAppSelector((state) => state.currency.currencySymbol);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useAppDispatch();
  const chnageToNairaHandler = () => {
    setHideBalance(false);
    dispatch(changeToNaira());
    setAnchorEl(null);
  };

  const chnageToDollarHandler = () => {
    setHideBalance(false);
    dispatch(changeToDollar());
    setAnchorEl(null);
  };

  const chnageToEuroHandler = () => {
    setHideBalance(false);
    dispatch(changeToEuro());
    setAnchorEl(null);
  };

  const hideBalanceHandler = () => {
    setHideBalance(true);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    // The JSX of the component renders a button that, when clicked, opens a menu with the different account
    // types and their corresponding balance.
    <Stack
      justifyContent="center"
      alignItems="flex-start"
      sx={{ paddingBottom: "16px" }}
    >
      <Button
        variant="text"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Stack direction="row" alignItems="center">
          <Box>Balance</Box>
          <KeyboardArrowDownIcon />
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={chnageToNairaHandler}>Naira</MenuItem>
        <MenuItem onClick={chnageToDollarHandler}>Dollar</MenuItem>
        <MenuItem onClick={chnageToEuroHandler}>Euro</MenuItem>
        <MenuItem onClick={hideBalanceHandler}>Hide Balance</MenuItem>
      </Menu>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: "25px",
          letterSpacing: "-0.2px",
          fontWeight: "500",
        }}
      >
        {/* format balance and currency symbol based on totalbalance currency mode(naire,dollar,euro and hide balance) */}
        {hideBalance === false && currency}
        {hideBalance === false &&
          currency === currencySymbol.NAIRA &&
          nairaBalance.toLocaleString()}
        {hideBalance === false &&
          currency === currencySymbol.DOLLAR &&
          dollarBalance.toLocaleString()}
        {hideBalance === false &&
          currency === currencySymbol.EURO &&
          euroBalance.toLocaleString()}
        {hideBalance && (
          <Stack justifyContent="center">
            <Typography variant="h6" fontSize="24px">
              0145638596
            </Typography>
            <SubHeading label="Savings" />
          </Stack>
        )}
      </Typography>
    </Stack>
  );
};

export default TotalBalance;
