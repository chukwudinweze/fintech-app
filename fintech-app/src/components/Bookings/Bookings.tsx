import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import SubHeading from "../../Global/SubHeading";
import Booking from "./Booking";
import styles from "./Bookings.module.css";

const Bookings = () => {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <SubHeading label="Book With Our Partners" />
      <Swiper
        className={styles.swiper}
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2.25,
            spaceBetween: 0.4,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <Booking backgroundImg="peace" />
        </SwiperSlide>
        <SwiperSlide>
          <Booking backgroundImg="GIG" />
        </SwiperSlide>
        <SwiperSlide>
          <Booking backgroundImg="libra" />
        </SwiperSlide>
        <SwiperSlide>
          <Booking backgroundImg="chisco" />
        </SwiperSlide>
        <SwiperSlide>
          <Booking backgroundImg="abc" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Bookings;
