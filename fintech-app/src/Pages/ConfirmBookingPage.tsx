import { Box } from "@mui/system";
import React from "react";
import BookingConfirmation from "../components/Bookings/BookingConfirmation";
import PageHeader from "../Global/PageHeader";
import { motion } from "framer-motion";

const ConfirmBookingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
  );
};

export default ConfirmBookingPage;
