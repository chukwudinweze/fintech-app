import { Box } from "@mui/material";
import React from "react";
import styles from "./Booking.module.css";

const Booking: React.FC<{
  backgroundImg: string;
}> = ({ backgroundImg }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "150px", sm: "200px", lg: "300px" },
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        borderRadius: "10px",
        background: "#ffffff",
      }}
    >
      <Box>
        <Box
          className={styles[backgroundImg]}
          // sx={{
          //   width: { xs: "100px", sm: "200px", lg: "300px" },
          //   height: { xs: "30px", sm: "80px", lg: "100px" },
          //   margin: "5px",
          // }}
        />
      </Box>
    </Box>
  );
};

export default Booking;
