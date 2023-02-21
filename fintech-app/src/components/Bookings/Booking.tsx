import React from "react";
import styles from "./Booking.module.css";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { toggleNav } from "../../store/InterfaceSlice";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { getBookingInfo } from "../../store/pendingTransactionSlice";

const terminals: string[] = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Kano",
  "Enugu",
  "Ibadan",
  "Maiduguri",
  "Jos",
  "Calabar",
  "Kaduna",
  "Onitsha",
  "Abeokuta",
  "Bauchi",
  "Lokoja",
  "Warri",
  "Sokoto",
  "Uyo",
  "Zamfara",
  "Owerri",
  "Osogbo",
  "Adamawa",
  "Asaba",
  "Akure",
  "Gombe",
  "Awka",
  "Ondo",
  "Yobe",
  "Umuahia",
  "Oyo",
];
const prices: number[] = [
  10000, 15000, 12000, 20000, 18000, 9000, 25000, 17000, 13000, 19000, 14000,
  11000, 21000, 16000, 17000, 22000, 14000, 23000, 20000, 15000, 24000, 19000,
  18000, 2200, 2000, 2100, 1800, 1900, 1500,
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Booking: React.FC<{
  backgroundImg: string;
}> = ({ backgroundImg }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2023-21-18T21:11:54")
  );

  const [departFrom, setDepartFrom] = React.useState<string>("Lagos");
  const [departTo, setDepartTo] = React.useState<string>("Enugu");
  const [seatNo, setSeatNo] = React.useState<string>("1");
  const dateHandler = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // generate price from depending on the selected destination terminal
  let selectedPrice: number;
  const priceIndex = terminals.indexOf(departTo);
  if (priceIndex !== -1) {
    selectedPrice = prices[priceIndex];
  }

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(toggleNav());
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(toggleNav());
  };
  const handlePendingTxn = () => {
    const monthValue = dayjs(value).month();
    const yearValue = dayjs(value).year();
    const dayValue = dayjs(value).date();
    const hourValue = dayjs(value).hour();
    const minutesValue = dayjs(value).minute();

    console.log({
      date: { monthValue, yearValue },
      departFrom,
      departTo,
      seatNo,
      hourValue,
      minutesValue,
      dayValue,
      backgroundImg,
    });
    dispatch(
      getBookingInfo({
        date: {
          monthValue,
          dayValue,
          yearValue,
          hourValue,
          minutesValue,
        },
        departFrom,
        departTo,
        seatNo,
        price: selectedPrice,
        backgroundImg,
      })
    );
    dispatch(toggleNav());
    navigate("/confirmbooking");
  };

  return (
    <div>
      <Box
        onClick={handleClickOpen}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "150px", sm: "200px", lg: "300px" },
          borderRadius: "10px",
          background: "#ffffff",
        }}
      >
        <Box>
          <Box className={styles[backgroundImg]} />
        </Box>
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3} marginTop="20px" margin="0 16px">
            <Box className={styles[backgroundImg]} sx={{ width: "50%" }} />
            <TextField
              id="outlined-select-currency-native"
              select
              label="Traveling From"
              value={departFrom}
              onChange={(e) => setDepartFrom(e.target.value)}
              SelectProps={{
                native: true,
              }}
              // helperText="Please select your currency"
            >
              {terminals.map((terminal) => (
                <option key={terminal} value={terminal}>
                  {terminal}
                </option>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Traveling To"
              value={departTo}
              onChange={(e) => setDepartTo(e.target.value)}
              SelectProps={{
                native: true,
              }}
              // helperText="Please select your currency"
            >
              {terminals.map((terminal) => (
                <option key={terminal} value={terminal}>
                  {terminal}
                </option>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Seat Quantity"
              value={seatNo}
              onChange={(e) => setSeatNo(e.target.value)}
              SelectProps={{
                native: true,
              }}
              // helperText="Please select your currency"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                (item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
            </TextField>
            <Stack sx={{ display: { xs: "none", sm: "none", lg: "flex" } }}>
              <DesktopDatePicker
                label="Departure Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={dateHandler}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
            <Stack sx={{ display: { xs: "flex", sm: "flex", lg: "none" } }}>
              <MobileDatePicker
                label="Departure Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={dateHandler}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
            <TimePicker
              label="Time"
              value={value}
              onChange={dateHandler}
              renderInput={(params) => <TextField {...params} />}
            />
            <Stack
              direction="row"
              spacing={2}
              marginTop="30px"
              marginBottom={{ lg: "50px" }}
            >
              <Button variant="contained" fullWidth onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" fullWidth onClick={handlePendingTxn}>
                Process
              </Button>
            </Stack>
          </Stack>
        </LocalizationProvider>
      </Dialog>
    </div>
  );
};

export default Booking;
