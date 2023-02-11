import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExperimentTwo = () => {
  const toat = () => toast("whatever");
  return (
    <Box>
      <Button onClick={toat}>toat me</Button>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        // closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="light"
      />
    </Box>
  );
};
export default ExperimentTwo;
