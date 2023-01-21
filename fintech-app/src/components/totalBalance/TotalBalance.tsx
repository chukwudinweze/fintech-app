import { Button, Menu, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../store/hooks";

const TotalBalance = () => {
  const [currencySymbol, setCurrencySymbol] = useState<string>("₦");
  const nairaBalance = useAppSelector((state) => state.nairaAccount.balance);
  const dollarBalance = useAppSelector((state) => state.dollarAccount.balance);
  const euroBalance = useAppSelector((state) => state.euroAccount.balance);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    // The JSX of the component renders a button that, when clicked, opens a menu with the different account
    // types and their corresponding balance.
    <Stack
      justifyContent="center"
      alignItems="center"
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
        <MenuItem onClick={handleClose}>Naira</MenuItem>
        <MenuItem onClick={handleClose}>Dollar</MenuItem>
        <MenuItem onClick={handleClose}>Euro</MenuItem>
        <MenuItem onClick={handleClose}>Hide Balance</MenuItem>
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
        {currencySymbol}
        {nairaBalance.toLocaleString()}
      </Typography>
    </Stack>
  );
};

export default TotalBalance;
