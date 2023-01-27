import { Stack } from "@chakra-ui/react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React from "react";

export const BankLogo: React.FC<{ src?: string; label: string }> = ({
  src,
  label,
}) => {
  return (
    <Avatar
      sx={{
        width: 60,
        height: 60,
        borderRadius: "10px",
        border: "1px solid #958d9e",
      }}
      alt={label}
      src={src}
      variant="square"
    />
  );
};

export const QuiPayLogo = () => {
  return (
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
  );
};
