import React from "react";
import { Typography, Box } from "@mui/material";

type accountProps = {
  label: string;
  amount: number;
  color: string;
};
const AcctSummaryLayout: React.FC<accountProps> = ({
  label,
  amount,
  color,
}) => {
  return (
    <Box
      sx={{
        padding: "12px",
        paddingLeft: "24px",
        paddingRight: "24px",
        borderRadius: "10px",
        background: "#ffffff",
      }}
    >
      <Typography variant="body1" component="div" color="#958d9e">
        {label}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        fontWeight={600}
        // fontSize="1.6875em"
        color={color}
      >
        ${amount}
      </Typography>
    </Box>
  );
};

export default AcctSummaryLayout;
