import Avatar from "@mui/material/Avatar";
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
