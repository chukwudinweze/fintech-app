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
import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import { useReactToPrint } from "react-to-print";
import { typeOfTxn } from "../../Global/TypeOfTransaction";

const PaymentRecipt = () => {
  const transaction = useAppSelector((state) => state.pendindTransaction);

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
            <Typography>Transfer Type </Typography>
            <Typography>{transaction.txnType}</Typography>
          </Stack>
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
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid #ababb5"
          >
            <Typography>Status</Typography> <Typography>Success</Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid #ababb5"
          >
            <Typography>Amount </Typography>
            <Typography variant="h6" fontWeight="700">
              {currencySymbol.NAIRA}
              {transaction.amount}.00
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid gray"
          >
            <Typography>Date</Typography>{" "}
            <Typography>
              {transaction.txnMonth} {transaction.txnDay}, {transaction.txnHour}
              :{transaction.txnMinutes}
            </Typography>
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
