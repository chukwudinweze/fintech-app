import React from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

type accountProps = {
  label: string;
  amount: number;
  color: string;
  pageLink: string;
};
const AcctSummaryLayout: React.FC<accountProps> = ({
  label,
  amount,
  color,
  pageLink,
}) => {
  return (
    <Link to={pageLink}>
      {" "}
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
    </Link>
  );
};

export default AcctSummaryLayout;
