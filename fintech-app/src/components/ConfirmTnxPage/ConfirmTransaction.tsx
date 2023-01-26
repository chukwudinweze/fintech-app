import * as React from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useNavigate } from "react-router-dom";
import { PinInput, PinInputField, Stack } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import { fundNaira } from "../../store/nairaAccountSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { months } from "../../Global/months";
import {
  getTxnDay,
  getTxnHour,
  getTxnMinutes,
  getTxnMonth,
  getTxnType,
  getTxnYear,
} from "../../store/pendingTransactionSlice";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmTransaction: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [pin1, setPin1] = React.useState("");
  const [pin2, setPin2] = React.useState("");
  const [pin3, setPin3] = React.useState("");
  const [pin4, setPin4] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const amount = useAppSelector((state) => state.pendindTransaction.amount);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleNavigate = () => {
    let userPin = `${pin1}${pin2}${pin3}${pin4}`;
    let formatedUserPin = +userPin;

    if (formatedUserPin === 2023) {
      // get time transaction was perfomed
      const date = new Date();
      const txnYear = date.getFullYear();
      const txnMonth = date.getMonth();
      let month = months[txnMonth];
      const day = date.getDate();
      const hour = date.getHours();
      const minutes = date.getMinutes();

      // dispatch transaction detail(date, time,amount etc)
      dispatch(getTxnMinutes(minutes));
      dispatch(getTxnHour(hour));
      dispatch(getTxnDay(day));
      dispatch(getTxnMonth(month));
      dispatch(fundNaira(amount));
      dispatch(getTxnYear(txnYear));
      dispatch(getTxnType("Wallet Funding"));

      // alert payment successful and navigate to transaction reciept page
      alert(`Payment Successful \n Generating Receipt`);
      navigate("/paymentrecipt");
    } else {
      // alert invalid pin and close diologue box
      alert("invalid pin");
      setOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box width="100%">
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        fullWidth
        size="large"
        sx={{
          color: "#ffffff",
          background: "#6236ff",
          border: "1.5px solid #6236ff",
          ":hover": {
            background: "#4e1dff",
            border: "1.5px solid #4e1dff",
            color: "#ffffff",
          },
        }}
      >
        Confirm
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {
            <Stack>
              <Typography variant="h6">Confirm Pin</Typography>
              <Typography>test user Pin: 2023</Typography>
            </Stack>
          }
        </DialogTitle>
        <DialogContent>
          <Stack direction="row">
            <PinInput type="number" mask>
              <PinInputField
                h="40px"
                fontSize="20px"
                value={pin1}
                w="100%"
                onChange={(e) => setPin1(e.target.value)}
              />
              <PinInputField
                fontSize="20px"
                value={pin2}
                w="100%"
                onChange={(e) => setPin2(e.target.value)}
              />
              <PinInputField
                fontSize="20px"
                value={pin3}
                w="100%"
                onChange={(e) => setPin3(e.target.value)}
              />
              <PinInputField
                value={pin4}
                fontSize="20px"
                w="100%"
                onChange={(e) => setPin4(e.target.value)}
              />
            </PinInput>
          </Stack>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>NO</Button> */}
          <Button onClick={handleNavigate}>Complete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ConfirmTransaction;
