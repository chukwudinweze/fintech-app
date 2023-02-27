import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./Mycard.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

type cardProps = {
  balance: number;
  expirydate: string;
  ccv: string;
  classname: string;
  lastFourDigit: string;
  fullDigit: string;
  currency: string;
};

const MyCard: React.FC<cardProps> = ({
  balance,
  lastFourDigit,
  fullDigit,
  expirydate,
  ccv,
  classname,
  currency,
}) => {
  const [showCardNumber, setShowCardNumber] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const ShowcardHandler = () => {
    setShowCardNumber(true);
    setAnchorEl(null);
  };

  const HidecardHandler = () => {
    setShowCardNumber(false);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={`${styles[classname]}`} sx={{ padding: "20px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Stack spacing={2}>
          <Stack>
            <Typography
              sx={{ opacity: ".5", letterSpacing: "1px" }}
              fontSize="12px"
              fontWeight="500"
            >
              BALANCE
            </Typography>
            <Typography sx={{ fontWeight: "600", fontSize: "24px" }}>
              {currency}
              {balance.toLocaleString()}
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{ opacity: ".5", letterSpacing: "1px" }}
              fontSize="12px"
              fontWeight="500"
            >
              CARD NUMBER
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight="600"
              sx={{ letterSpacing: "1px" }}
            >
              <Typography
                variant="h5"
                sx={{ letterSpacing: "5px" }}
                component="span"
              >
                {showCardNumber ? "" : "...."}
              </Typography>
              {showCardNumber ? fullDigit : lastFourDigit}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Stack justifyContent="center" alignItems="center">
              <Typography
                sx={{ opacity: ".5", letterSpacing: "1px" }}
                fontSize="12px"
                fontWeight="500"
              >
                EXPIRY
              </Typography>
              <Typography fontSize="16px" fontWeight="600">
                {expirydate}
              </Typography>
            </Stack>
            <Stack justifyContent="center" alignItems="center">
              <Typography
                sx={{ opacity: ".5" }}
                fontSize="12px"
                fontWeight="500"
              >
                CCV
              </Typography>
              <Typography fontSize="16px" fontWeight="600">
                {ccv}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: "#fff" }}
          aria-label="delete"
          size="large"
        >
          <MoreHorizIcon fontSize="inherit" />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {!showCardNumber && (
            <MenuItem onClick={ShowcardHandler}>Show Card No</MenuItem>
          )}
          {showCardNumber && (
            <MenuItem onClick={HidecardHandler}>Hide Card No</MenuItem>
          )}
        </Menu>
      </Stack>
    </Box>
  );
};

export default MyCard;
