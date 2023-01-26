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
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

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

  return (
    <Box
      ref={ref}
      height="100vh"
      textAlign="center"
      sx={{
        padding: { xs: "20px", sm: "30px", lg: "100px", background: "#fff" },
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
          <Typography>Transfer Type</Typography>{" "}
          <Typography>{transaction.txnType}</Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid #ababb5"
        >
          <Typography>Debit Account</Typography>{" "}
          <Typography>{transaction.debitAccount}</Typography>
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
          <Typography>Amount</Typography>{" "}
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
            {transaction.txnMonth} {transaction.txnDay}, {transaction.txnHour}:
            {transaction.txnMinutes}
          </Typography>
        </Stack>
      </Stack>
      <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {
            <SpeedDialAction
              icon={<FileCopyIcon />}
              tooltipTitle="downlaod recipt"
              tooltipOpen
              onClick={getScreenShot}
            />
          }
        </SpeedDial>
      </Box>
    </Box>
  );
};

export default PaymentRecipt;
