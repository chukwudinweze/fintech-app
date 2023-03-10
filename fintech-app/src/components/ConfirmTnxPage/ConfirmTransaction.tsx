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
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import { fundNaira, withdrawNaira } from "../../store/nairaAccountSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { months } from "../../Global/months";
import {
  getTxnDay,
  getTxnHour,
  getTxnId,
  getTxnMinutes,
  getTxnMonth,
  getTxnYear,
} from "../../store/pendingTransactionSlice";
import { typeOfTxn } from "../../Global/TypeOfTransaction";
import { currencySymbol } from "../../store/currencySymbolEnum";
import { dollarToNaira } from "../utilities/dollarToNaira";
import { fundDollar, withdrawDollar } from "../../store/dollarAccountSlice";
import { fundEuro, withdrawEuro } from "../../store/euroAccount";
import { nairaToEuro } from "../utilities/nairaToEuro";
import { euroToNaira } from "../utilities/euroToNaira";
import { nairaToDollar } from "../utilities/nairaToDollar";
import { getNewTransaction } from "../../store/completedTxnSlice";
import { v4 as uuidv4 } from "uuid";
import {
  addToDollarTotalExpenses,
  addToEuroTotalExpenses,
  addToNairaTotalExpenses,
} from "../../store/ExpensesSlice";
import { getNewFundAmount } from "../../store/totalFunded";
import { upDateTxnStatus } from "../../store/sharedPay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import txnSuccessGif from "../../assets/transactionSuccess.gif";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" timeout={3000} ref={ref} {...props} />;
});

const Transition2 = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" timeout={3000} ref={ref} {...props} />;
});

const ConfirmTransaction: React.FC = () => {
  // this stores the individual pin entered by the user
  const [open, setOpen] = React.useState<boolean>(false);
  const [openTxnStatusDialogu, setOpenTxnStatusDialogu] = React.useState(false);
  const [pin1, setPin1] = React.useState("");
  const [pin2, setPin2] = React.useState("");
  const [pin3, setPin3] = React.useState("");
  const [pin4, setPin4] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const pendingTxn = useAppSelector((state) => state.pendindTransaction);
  const nairaBalance = useAppSelector((state) => state.nairaAccount.balance);
  const dollarBalance = useAppSelector((state) => state.dollarAccount.balance);
  const euroBalance = useAppSelector((state) => state.euroAccount.balance);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOpenTxnStatus = () => {
    setOpenTxnStatusDialogu(true);
  };

  const handleCloseTxnStatus = () => {
    setOpenTxnStatusDialogu(false);
  };

  const handleNavigate = () => {
    let userPin = `${pin1}${pin2}${pin3}${pin4}`;
    let formatedUserPin = +userPin;

    if (formatedUserPin === 2023) {
      // get time transaction was perfomed
      const date = new Date();
      const txnYear = date.getFullYear();
      const txnMonth = date.getMonth();
      const month = months[txnMonth];
      const day = date.getDate();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const completedTxnDate = `${month} ${day}, ${txnYear}`;
      const Txnid = uuidv4().slice(0, 15);

      // perfom transaction depending on the type of transaction
      // sent to the pending transaction slice in the redux store
      if (pendingTxn.txnType === typeOfTxn.WALLET_FUNDING) {
        dispatch(fundNaira(pendingTxn.amount));
        // also dispatch the amount, type of transaction and date
        // of transaction to the completed transaction store
        dispatch(
          getNewTransaction({
            amount: pendingTxn.amount,
            date: completedTxnDate,
            label: "Wallet Funding",
            id: Txnid,
            // type of transaction is provided here.
            // This is only provided if the type of transaction is funding
            typeOfTxn: typeOfTxn.WALLET_FUNDING,
            currency: currencySymbol.NAIRA,
          })
        );

        //convert funded amount to dollar and add amount to the total fund in the store
        let formatedAmt = nairaToDollar(pendingTxn.amount);
        dispatch(getNewFundAmount(formatedAmt));
      }
      if (pendingTxn.txnType === typeOfTxn.WITHDRAWAL) {
        // confirm that user account is sufficient for the transaction
        if (nairaBalance < pendingTxn.amount) {
          toast.error("Your account is insuffucuent for this transaction!");
          setOpen(false);
          return;
        }
        dispatch(withdrawNaira(pendingTxn.amount));

        // also dispatch the amount, type of transaction and date of transaction to the completed transaction store
        dispatch(
          getNewTransaction({
            amount: pendingTxn.amount,
            date: completedTxnDate,
            label: "Naira Withdrawal",
            id: Txnid,
            currency: currencySymbol.NAIRA,
          })
        );

        // then add amount to total expense
        dispatch(addToNairaTotalExpenses(pendingTxn.amount));
      }

      if (pendingTxn.txnType === typeOfTxn.TRANSFER) {
        // confirm that user account is sufficient for the transaction
        if (nairaBalance < pendingTxn.amount) {
          toast.error("Your account is insuffucuent for this transaction!");
          setOpen(false);
          return;
        }

        dispatch(withdrawNaira(pendingTxn.amount));

        // also dispatch the amount, type of transaction and
        // date of transaction to the completed transaction store
        dispatch(
          getNewTransaction({
            amount: pendingTxn.amount,
            date: completedTxnDate,
            label: "Quipay Transfer",
            id: Txnid,
            currency: currencySymbol.NAIRA,
          })
        );

        // then add amount to total expense
        dispatch(addToNairaTotalExpenses(pendingTxn.amount));
      }
      if (pendingTxn.txnType === typeOfTxn.EXCHAGE) {
        if (
          pendingTxn.ExchangeCurrencyFrom === currencySymbol.NAIRA &&
          pendingTxn.ExchangeCurrencyTo === currencySymbol.DOLLAR
        ) {
          // confirm that user account is sufficient for the transaction
          if (nairaBalance < pendingTxn.amount) {
            toast.error("Your account is insuffucuent for this transaction!");
            setOpen(false);
            return;
          }
          const nairaInDollar = nairaToDollar(pendingTxn.amount);
          dispatch(withdrawNaira(pendingTxn.amount));
          dispatch(fundDollar(nairaInDollar));

          // also dispatch the amount, type of transaction and date of transaction to the completed transaction store
          dispatch(
            getNewTransaction({
              amount: pendingTxn.amount,
              date: completedTxnDate,
              label: "Naira to Dollar Exchange",
              id: Txnid,
              currency: currencySymbol.NAIRA,
            })
          );

          // then add amount to total expense
          dispatch(addToNairaTotalExpenses(pendingTxn.amount));
        }
        if (
          pendingTxn.ExchangeCurrencyFrom === currencySymbol.NAIRA &&
          pendingTxn.ExchangeCurrencyTo === currencySymbol.EURO
        ) {
          // confirm that user account is sufficient for the transaction
          if (nairaBalance < pendingTxn.amount) {
            toast.error("Your account is insuffucuent for this transaction!");
            setOpen(false);
            return;
          }
          const nairaInEuro = nairaToEuro(pendingTxn.amount);
          dispatch(withdrawNaira(pendingTxn.amount));
          dispatch(fundEuro(nairaInEuro));
          // also dispatch the amount, type of transaction and date of transaction to the completed transaction store
          dispatch(
            getNewTransaction({
              amount: pendingTxn.amount,
              date: completedTxnDate,
              label: "Naira to Euro Exchange",
              id: Txnid,
              currency: currencySymbol.NAIRA,
            })
          );

          // then add amount to total expense
          dispatch(addToNairaTotalExpenses(pendingTxn.amount));
        }
        if (pendingTxn.ExchangeCurrencyFrom === currencySymbol.DOLLAR) {
          // confirm that user account is sufficient for the transaction
          if (dollarBalance < pendingTxn.amount) {
            toast.error("Your account is insuffucuent for this transaction!");
            setOpen(false);
            return;
          }

          const dollarInNaira = dollarToNaira(pendingTxn.amount);
          dispatch(withdrawDollar(pendingTxn.amount));
          dispatch(fundNaira(dollarInNaira));
          // also dispatch the amount, type of transaction and date of transaction to the completed transaction store
          dispatch(
            getNewTransaction({
              amount: pendingTxn.amount,
              date: completedTxnDate,
              label: "Dollar to Naira Exchange",
              id: Txnid,
              currency: currencySymbol.DOLLAR,
            })
          );

          // then add amount to total expense
          dispatch(addToDollarTotalExpenses(pendingTxn.amount));
        }
        if (pendingTxn.ExchangeCurrencyFrom === currencySymbol.EURO) {
          // confirm sufficient balance for this transaction
          if (euroBalance < pendingTxn.amount) {
            toast.error("Your account is insuffucuent for this transaction!");
            setOpen(false);
            return;
          }
          const euroInNaira = euroToNaira(pendingTxn.amount);
          dispatch(withdrawEuro(pendingTxn.amount));
          dispatch(fundNaira(euroInNaira));
          // also dispatch the amount, type of transaction and date of transaction to the completed transaction store
          dispatch(
            getNewTransaction({
              amount: pendingTxn.amount,
              date: completedTxnDate,
              label: "Euro to Naira Exchange",
              id: Txnid,
              currency: currencySymbol.EURO,
            })
          );

          // then add amount to total expense
          dispatch(addToEuroTotalExpenses(pendingTxn.amount));
        }
      }
      if (pendingTxn.txnType === typeOfTxn.SHAREDPAY) {
        // confirm that user account is sufficient for the transaction
        if (dollarBalance < pendingTxn.amount) {
          toast.error("Your account is insuffucuent for this transaction!");
          setOpen(false);
          return;
        }

        dispatch(withdrawDollar(pendingTxn.amount));
        // also dispatch the amount, type of transaction and date of transaction to the completed transaction store
        dispatch(
          getNewTransaction({
            amount: pendingTxn.amount,
            date: completedTxnDate,
            label: pendingTxn.label,
            id: pendingTxn.id,
            currency: currencySymbol.DOLLAR,
          })
        );

        // then add amount to total expense
        dispatch(addToDollarTotalExpenses(pendingTxn.amount));

        //update the status of this transaction from pending to completed
        dispatch(upDateTxnStatus(pendingTxn.id));
      }
      if (pendingTxn.txnType === typeOfTxn.BOOkING) {
        const seatNo = +pendingTxn.booking.seatNo;
        const price = pendingTxn.booking.price;
        const bookingPrice = price * seatNo;
        // confirm that user account is sufficient for the transaction
        if (dollarBalance < bookingPrice) {
          toast.error("Your account is insuffucuent for this transaction!");
          setOpen(false);
          return;
        }

        dispatch(withdrawNaira(bookingPrice));
        // also dispatch the amount, type of transaction and date of transaction to the completed transaction store
        dispatch(
          getNewTransaction({
            amount: bookingPrice,
            date: completedTxnDate,
            label: pendingTxn.booking.label,
            id: Txnid,
            currency: currencySymbol.NAIRA,
          })
        );
        // then add amount to total expense
        dispatch(addToNairaTotalExpenses(bookingPrice));
      }

      // dispatch transaction detail(date, time,amount etc)
      dispatch(getTxnId(Txnid));
      dispatch(getTxnYear(txnYear));
      dispatch(getTxnMinutes(minutes));
      dispatch(getTxnHour(hour));
      dispatch(getTxnDay(day));
      dispatch(getTxnMonth(month));

      // alert payment successful and navigate to transaction reciept page
      // alert(`Payment Successful \n Generating Receipt`);

      handleOpenTxnStatus();
      setOpen(false);
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
      <ToastContainer theme="colored" />
      <Stack alignItems="center" justifyContent="center">
        <Dialog
          fullScreen
          open={openTxnStatusDialogu}
          onClose={handleCloseTxnStatus}
          TransitionComponent={Transition2}
        >
          <Stack
            sx={{ marginTop: "150px" }}
            justifyContent="center"
            alignItems="center"
            spacing={30}
          >
            <Typography fontWeight={700} fontSize="20px">
              Transaction successful
            </Typography>
            <Avatar
              sx={{ width: "200px", height: "200px", marginTop: "30px" }}
              alt="Remy Sharp"
              src={txnSuccessGif}
            />
            <Button onClick={() => navigate("/paymentrecipt")}>
              Generate Receipt
            </Button>
          </Stack>
        </Dialog>
      </Stack>
    </Box>
  );
};

export default ConfirmTransaction;
