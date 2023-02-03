import { Box } from "@mui/material";
import React from "react";
import PageHeader from "../../Global/PageHeader";
import Experiment from "../Experiment";

export default function App() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        minHeight="100vh"
        sx={{
          background: "#6236ff",
          width: "100%",
        }}
      >
        <PageHeader label="Expenses" />
        <Experiment />
      </Box>
    </>
  );
}
