import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const terminals = [
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
const BookingPage = () => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Traveling From"
          defaultValue="Lagos"
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
          defaultValue="Enugu"
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
          defaultValue="1"
          SelectProps={{
            native: true,
          }}
          // helperText="Please select your currency"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </TextField>
        <Stack sx={{ display: { xs: "none", sm: "none", lg: "flex" } }}>
          <DesktopDatePicker
            label="Departure Date"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
        <Stack sx={{ display: { xs: "flex", sm: "flex", lg: "none" } }}>
          <MobileDatePicker
            label="Departure Date"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
        <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <Stack direction="row" spacing={2} marginTop="30px">
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
        </Stack>
      </Stack>
    </LocalizationProvider>
  );
};

export default BookingPage;
