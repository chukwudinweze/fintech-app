import { Button, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useAppSelector } from "../../store/hooks";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { months } from "../../Global/months";
import styles from "./BookingConfirm.module.css";
import { useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const pendingBooking = useAppSelector(
    (state) => state.pendindTransaction.booking
  );
  const navigate = useNavigate();
  const bookingDate = pendingBooking.date;
  const backgroundImg = pendingBooking.backgroundImg;
  return (
    <Stack>
      <Box
        width="100%"
        height={{ xs: "200px", sm: "300px", lg: "300px" }}
        className={styles[backgroundImg]}
      />
      <Paper sx={{ marginBottom: "20px", paddingBottom: "15px" }}>
        <Typography
          textAlign="center"
          variant="h6"
          component="h4"
          fontWeight={700}
          color="#423e92"
          fontSize="20px"
        >
          {pendingBooking.price}{" "}
          <Typography component="span">for one seat</Typography>
        </Typography>
      </Paper>
      <Stack
        padding={{ xs: "0 20px", sm: "0 30px", lg: "0 60px" }}
        direction={{ xs: "column", sm: "column", lg: "row" }}
        spacing={4}
        width="100%"
        justifyContent={"space-between"}
      >
        <Stack direction="row" spacing={10} justifyContent="space-around">
          <Stack justifyContent="center">
            <Typography
              variant="h6"
              component="h4"
              fontWeight={700}
              color="#423e92"
              fontSize="16px"
            >
              Hiace Bus
            </Typography>
            <Typography color="#423e92">
              {pendingBooking.departFrom} {"=>"} {pendingBooking.departTo}
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant="h6"
              component="h4"
              fontWeight={700}
              color="#423e92"
              fontSize="16px"
            >
              Boarding Date
            </Typography>
            <Typography
              color="#423e92"
              justifyContent="cengter"
              alignItems="center"
              fontSize="13px"
            >
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <CalendarTodayIcon />{" "}
                <Typography>{bookingDate.dayValue}</Typography>
                <Typography>{months[bookingDate.monthValue]}</Typography>,{" "}
                <Typography>{bookingDate.yearValue}</Typography>
              </Stack>
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={10} direction="row" justifyContent="space-between">
          <Stack>
            <Typography
              variant="h6"
              component="h4"
              fontWeight={700}
              color="#423e92"
              fontSize="16px"
            >
              Boarding Time
            </Typography>
            <Typography color="#423e92">
              <Stack direction="row" spacing={0.5}>
                <AccessTimeIcon />{" "}
                <Typography>
                  {bookingDate.hourValue}:{bookingDate.minutesValue}
                </Typography>
              </Stack>
            </Typography>
          </Stack>
          <Stack justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              component="h4"
              fontWeight={700}
              color="#423e92"
              fontSize="16px"
            >
              Number of Seats
            </Typography>
            <Typography color="#423e92">{pendingBooking.seatNo}</Typography>
          </Stack>
        </Stack>

        <Button
          sx={{ padding: "10px" }}
          variant="contained"
          onClick={() => {
            navigate("/confirmtxn");
          }}
        >
          Complete Payment
        </Button>
      </Stack>
    </Stack>
  );
};

export default BookingConfirmation;
