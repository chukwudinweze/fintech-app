import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import {
  Backdrop,
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Typography,
} from "@mui/material";
import { currencySymbol } from "../../store/currencySymbolEnum";
import { useAppSelector } from "../../store/hooks";
import React, { useCallback, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import { useReactToPrint } from "react-to-print";
import { typeOfTxn } from "../../Global/TypeOfTransaction";
import { months } from "../../Global/months";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const PaymentRecipt = () => {
  const transaction = useAppSelector((state) => state.pendindTransaction);
  const bookingDetail = useAppSelector(
    (state) => state.pendindTransaction.booking
  );

  // handle dialbox opening and closing
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // default node value to be screenshot
  const ref = useRef<HTMLDivElement>(null);

  const getScreenShot = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    setOpen(false);
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  // handle print action
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  // prevent user from going back to confirm payment page
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function (event) {
      navigate("/");
    };
  }, [navigate]);

  return (
    <Box height="100vh" sx={{ background: { xs: "#fff", sm: "#ededf5" } }}>
      {" "}
      <Box
        ref={ref}
        textAlign="center"
        sx={{
          padding: {
            xs: "20px",
            sm: "30px",
            lg: "40px 150px",
            background: "#fff",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          },
          margin: { xs: 0, sm: 0, lg: "20px" },
        }}
        color="#27173E"
      >
        <CheckCircleOutlineRoundedIcon
          sx={{ fontSize: "70px", color: "#6236FF" }}
        />
        <Typography variant="body1" fontWeight="600" fontSize="18px">
          Payment Successful
        </Typography>
        <Stack spacing={4} marginTop="50px">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid #ababb5"
          >
            <Typography>Status</Typography>{" "}
            <Typography color="#1dcc70">Completed</Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid #ababb5"
          >
            <Typography>Transaction Type </Typography>
            <Typography textTransform="capitalize">
              {transaction.txnType === typeOfTxn.BOOkING
                ? bookingDetail.label
                : transaction.txnType}
            </Typography>
          </Stack>
          {transaction.txnType !== typeOfTxn.EXCHAGE &&
            transaction.txnType !== typeOfTxn.BOOkING && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                borderBottom="1px solid #ababb5"

                // code below first checks the transaction type and then uses a ternary operator to either display "Debit Account" and the debit account number or "Destination Account" and the destination account number
              >
                {transaction.txnType === typeOfTxn.WALLET_FUNDING ? (
                  <>
                    <Typography>Debit Account </Typography>
                    <Typography>{transaction.debitAccount}</Typography>
                  </>
                ) : (
                  <>
                    <Typography>Destination Account </Typography>
                    <Typography>{transaction.destinationAcct}</Typography>
                  </>
                )}
              </Stack>
            )}

          {transaction.txnType === typeOfTxn.BOOkING && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              borderBottom="1px solid #ababb5"
            >
              <Typography>No of seat </Typography>
              <Typography>{bookingDetail.seatNo}</Typography>
            </Stack>
          )}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid #ababb5"
          >
            <Typography>Amount </Typography>
            <Typography variant="h6" fontWeight="700">
              {currencySymbol.NAIRA}
              {transaction.txnType === typeOfTxn.BOOkING
                ? bookingDetail.price.toLocaleString()
                : transaction.amount.toLocaleString()}
            </Typography>
          </Stack>
          {transaction.txnType === typeOfTxn.BOOkING && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              borderBottom="1px solid #ababb5"
            >
              <Typography>Boarding date </Typography>
              <Stack direction="row" spacing={0.3}>
                <Typography>{bookingDetail.date.dayValue}</Typography>
                <Typography>{months[bookingDetail.date.monthValue]}</Typography>
                , <Typography>{bookingDetail.date.yearValue}</Typography>
              </Stack>
            </Stack>
          )}
          {transaction.txnType === typeOfTxn.BOOkING && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              borderBottom="1px solid #ababb5"
            >
              <Typography>Boarding Time </Typography>
              <Stack direction="row" spacing={0.3}>
                <Typography>{bookingDetail.date.hourValue}</Typography>:
                <Typography>{bookingDetail.date.minutesValue}</Typography>
              </Stack>
            </Stack>
          )}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid gray"
          >
            <Typography>Transaction Date </Typography>
            <Stack direction="row" spacing={0.3}>
              <Typography>{transaction.txnDay}</Typography>
              <Typography>{transaction.txnMonth}</Typography>,{" "}
              <Typography>{transaction.txnYear}</Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid gray"
          >
            <Typography>Reciept ID</Typography>{" "}
            <Typography>{transaction.id}</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{
            position: "absolute",
            bottom: { xs: "-70px", sm: "-5px", lg: 0 },
            right: 0,
          }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {
            <SpeedDialAction
              icon={<CloseIcon />}
              tooltipTitle="Close Page"
              tooltipOpen
              onClick={() => navigate("/")}
            />
          }
          {
            <SpeedDialAction
              icon={<SaveIcon />}
              tooltipTitle="Save"
              tooltipOpen
              onClick={getScreenShot}
            />
          }
          {
            <SpeedDialAction
              icon={<PrintIcon />}
              tooltipTitle="Print"
              tooltipOpen
              onClick={handlePrint}
            />
          }
        </SpeedDial>
      </Box>
    </Box>
  );
};

export default PaymentRecipt;
