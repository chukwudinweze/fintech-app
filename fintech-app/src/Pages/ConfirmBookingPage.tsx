import { Box } from "@mui/system";
import React from "react";
import BookingConfirmation from "../components/Bookings/BookingConfirmation";
import PageHeader from "../Global/PageHeader";

const ConfirmBookingPage = () => {
  return (
    <Box bgcolor="#fff" sx={{ minHeight: "100vh" }}>
      <PageHeader
        label="Booking Details"
        color="#fff"
        backgroundColor="#6236ff"
      />
      <Box marginTop="50px">
        <BookingConfirmation />
      </Box>
    </Box>
  );
};

export default ConfirmBookingPage;
