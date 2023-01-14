import { Swiper, SwiperSlide } from "swiper/react";
// import { freeMode } from 'swiper';

import { Box, Typography } from "@mui/material";
import React from "react";
import BillsLayout from "./BillsLayout";
import "swiper/css";
import "swiper/css/free-mode";
import EdenLogo from "../../assets/edenlife.webp";
import iFitnessLogo from "../../assets/iFitness.png";
import ShuttlerLogo from "../../assets/shuttlers.png";
import Netflix from "../../assets/netflix.png";
import DstvLogo from "../../assets/Dstvlogo.jpg";

const Bills = () => {
  return (
    <Box>
      <Box sx={{ marginTop: "20px" }}>
        <Typography color="#27173e">Monthly Bills</Typography>
      </Box>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={65}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 65,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <BillsLayout img={EdenLogo} amount={85.5} date="2 Feb" />
        </SwiperSlide>
        <SwiperSlide>
          <BillsLayout img={iFitnessLogo} amount={71.3} date="9 Sept" />
        </SwiperSlide>
        <SwiperSlide>
          <BillsLayout img={ShuttlerLogo} amount={50} date="14 April" />
        </SwiperSlide>
        <SwiperSlide>
          <BillsLayout img={Netflix} amount={16} date="5 June" />
        </SwiperSlide>
        <SwiperSlide>
          <BillsLayout img={DstvLogo} amount={30} date="9 May" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Bills;
