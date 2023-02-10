import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

const CancelRenewal: React.FC<{ label: string }> = ({ label }) => {
  const [open, setOpen] = React.useState(false);

  const [renewalActive, setrenewalActive] = React.useState<boolean>(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRenewal = () => {
    setrenewalActive(!renewalActive);
    setOpen(false);
  };

  return (
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
        <DialogTitle id="alert-dialog-title">{"Cancel Renewal?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are about to discontinue{" "}
            <Typography component="span" color="#6236ff">
              {label}
            </Typography>
            auto-renewal option. Your current subscription will no longer
            receive this service after it reaches its expiration date next
            month.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRenewal} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CancelRenewal;
