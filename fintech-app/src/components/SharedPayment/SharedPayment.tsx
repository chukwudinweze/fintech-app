import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SharedPayLogo from "../../assets/SharedPaymentLogo.png";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getDestinationAcct,
  getInitiator,
  getTxnId,
  getTxnType,
  pendingTxnAmount,
} from "../../store/pendingTransactionSlice";
import { deActivateDrawer } from "../../store/InterfaceSlice";
import { typeOfTxn } from "../../Global/TypeOfTransaction";
import { currencySymbol } from "../../store/currencySymbolEnum";

type propsType = {
  initiator: string;
  purpose: string;
  expringDate: string;
  amount: string;
  pending: boolean;
  id: string;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SharedPayment: React.FC<propsType> = ({
  initiator,
  purpose,
  expringDate,
  amount,
  pending,
  id,
}) => {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const completeTxns = useAppSelector((state) => state.completedTransactions);
  const completedSharedPay = completeTxns.find(
    (completedtxn) => completedtxn.id === id
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePendingTxn = () => {
    dispatch(pendingTxnAmount(+amount));
    dispatch(getDestinationAcct("sharedpay291"));
    dispatch(getTxnType(typeOfTxn.SHAREDPAY));
    dispatch(getInitiator(initiator));
    dispatch(getTxnId(id));
    // dispatch(deActivateDrawer());
    navigate("/confirmtxn");
  };

  return (
    <div>
      <Box
        onClick={handleClickOpen}
        component="article"
        sx={{
          backgroundColor: "#ffffff",
          padding: "16px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="shared pay"
              src={SharedPayLogo}
              sx={{ width: 56, height: 56 }}
            />
            <Stack>
              <Typography color="#27173e" fontSize="12px" fontWeight="700">
                {purpose}
              </Typography>
              <Typography color="#958d9e" fontSize="12px">
                Initiated by {initiator}
              </Typography>
              <Typography color="#ff396f" fontSize="12px">
                {pending && expringDate}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="column">
            <Typography
              color={pending ? "#FFC000" : "#ff396f"}
              fontWeight="700"
            >
              {currencySymbol.DOLLAR}
              {amount}
            </Typography>
            <Typography color={pending ? "#958d9e" : "#1dcc70"} fontSize="12px">
              {pending ? "pending" : "completed"}
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {pending && (
          <Stack
            marginTop="50px"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Avatar
              sx={{
                border: "3px olid red",
                width: "100px",
                height: "100px",
                background: "#6236ff",
                marginBottom: "20px",
              }}
            >
              {currencySymbol.DOLLAR}
              {amount}
            </Avatar>
            <Box>
              <Typography
                textAlign="center"
                variant="h6"
                component="h6"
                fontWeight={700}
              >
                {purpose}
              </Typography>
              <Typography>
                Please confirm
                <Typography component="span" color="#6236ff" fontWeight={700}>
                  {" "}
                  {currencySymbol.DOLLAR}
                  {amount}{" "}
                </Typography>
                Shared payment request from{" "}
                <Typography component="span" color="#6236ff" fontWeight={700}>
                  {" "}
                  {initiator}{" "}
                </Typography>
              </Typography>
              <Typography>
                Clicking confirm will deduct the amount from your account and
                credit it to a virtual account for the course. Use the ID
                <Typography component="span" color="#6236ff" fontWeight={700}>
                  {" "}
                  {id}{" "}
                </Typography>{" "}
                to track the transaction and view declined payments.
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} marginTop="30px">
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="outlined" onClick={handlePendingTxn}>
                Confirm
              </Button>
            </Stack>
          </Stack>
        )}
        {!pending && (
          <Stack
            marginTop="50px"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Avatar
              sx={{
                border: "3px olid red",
                width: "100px",
                height: "100px",
                background: "#6236ff",
                marginBottom: "20px",
              }}
            >
              {currencySymbol.DOLLAR}
              {amount}
            </Avatar>
            <Box>
              <Typography
                textAlign="center"
                variant="h6"
                component="h6"
                fontWeight={700}
              >
                {purpose}
              </Typography>
              <Stack>
                <Typography>You've completed this transaction!</Typography>
                <Typography>
                  Date:{" "}
                  <Typography component="span" color="#6236ff">
                    {completedSharedPay?.date}
                  </Typography>
                </Typography>
              </Stack>
            </Box>
            <Stack direction="row" spacing={2} marginTop="30px">
              <Button variant="outlined" onClick={handleClose}>
                Close
              </Button>
            </Stack>
          </Stack>
        )}
      </Dialog>
    </div>
  );
};

export default SharedPayment;
