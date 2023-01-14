import { Box, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./BillsLayout.module.css";

type propsType = {
  img: string;
  amount: number;
  date: string;
};

const BillsLayout: React.FC<propsType> = ({ img, amount, date }) => {
  return (
    <Box
      sx={{
        background: "#ffffff",
        width: { xs: "160px", sm: "342px", lg: "240px" },
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      <div className={styles.billLogo}>
        <img src={img} alt="ede life logo" />
      </div>
      <Typography variant="h5" color="#000" sx={{ fontWeight: "600" }}>
        ${amount}
      </Typography>
      <Typography color="#ff396f" sx={{ fontSize: "13px" }}>
        Due date
      </Typography>
      <Typography
        variant="body1"
        // color="#958d9e"
        component="div"
        sx={{ fontSize: "13px" }}
      >
        {date}
      </Typography>
      <Button
        sx={{
          marginTop: "10px",
          borderRadius: "7px",
          outline: "none",
          border: "1px solid #6236ff",
          color: "#fff",
          background: "#6236ff",
          fontSize: "11px",
          fontWeight: "600",
          padding: "0px 3.5px",
          ":hover": {
            background: "#4e1dff",
            cursor: "pointer",
            color: "#fff",
          },
        }}
        className={styles.cancelSubBtn}
      >
        Early Deposit
      </Button>
    </Box>
  );
};

export default BillsLayout;
