import { Typography } from "@mui/material";
import React from "react";

const SubHeading: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Typography variant="h6" color="#27173e" fontWeight="700px" fontSize="15px">
      {label}
    </Typography>
  );
};

export default SubHeading;
