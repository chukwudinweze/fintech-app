import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./BillsLayout.module.css";

type propsType = {
  img: string;
  amount: number;
  date: string;
  label: string;
};

const BillsLayout: React.FC<propsType> = ({ img, amount, date, label }) => {
  const [open, setOpen] = React.useState(false);

  const [renewalActive, setrenewalActive] = React.useState<boolean>(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRenewal = () => {
    setrenewalActive(true);
    setOpen(false);
    toast(`${label} Renewal Successful`);
  };
  const cancelRenewal = () => {
    setrenewalActive(false);
    toast(`${label} Auto Renewal Canceled`);
    setOpen(false);
  };
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
      {renewalActive && (
        <Typography color="#ff396f" sx={{ fontSize: "13px" }}>
          Due date
        </Typography>
      )}
      {renewalActive && (
        <Typography
          variant="body1"
          // color="#958d9e"
          component="div"
          sx={{ fontSize: "13px" }}
        >
          {date}
        </Typography>
      )}
      <div>
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
            padding: "3px 7px",
            ":hover": {
              background: "#4e1dff",
              cursor: "pointer",
              color: "#fff",
            },
          }}
          onClick={handleClickOpen}
        >
          {renewalActive ? "Cancel Renewal" : "Activate Service"}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{`${
            renewalActive ? "Cancel Renewal?" : "Activate"
          }`}</DialogTitle>
          <DialogContent>
            {renewalActive && (
              <DialogContentText id="alert-dialog-description">
                You are about to discontinue{" "}
                <Typography component="span" color="#6236ff">
                  {label}
                </Typography>{" "}
                auto-renewal option. Your current subscription will no longer
                receive this service after it reaches its expiration date next
                month.
              </DialogContentText>
            )}
            {!renewalActive && (
              <DialogContentText id="alert-dialog-description">
                Confirm the activation of{" "}
                <Typography component="span" color="#6236ff">
                  {label}
                </Typography>{" "}
                package and be aware that you will be charged $6. You will
                receive a reminder one week before the renewal date. Enjoy!
              </DialogContentText>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={renewalActive ? cancelRenewal : handleRenewal}
              autoFocus
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
};

export default BillsLayout;
