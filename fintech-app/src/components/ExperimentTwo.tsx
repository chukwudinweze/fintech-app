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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CancelTransaction: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [pin1, setPin1] = React.useState("");
  const [pin2, setPin2] = React.useState("");
  const [pin3, setPin3] = React.useState("");
  const [pin4, setPin4] = React.useState("");

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleNavigate = () => {
    let userPin = `${pin1}${pin2}${pin3}${pin4}`;
    let formatedUserPin = +userPin;

    if (formatedUserPin === 2023) {
      alert("payment successful");
      navigate("/notification");
    } else {
      console.log(formatedUserPin);
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
          color: "#958d9e",
          border: "1.5px solid #8494a8",
          ":hover": {
            background: "#dbd2e7",
            color: "#4e1dff",
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
        <DialogTitle>{"Confirm Pin"}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-slide-description">
            Confirm you want to cancel Transaction
          </DialogContentText> */}
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

export default CancelTransaction;
