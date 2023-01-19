import { useState } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SubHeading from "../../Global/SubHeading";
import MyCard from "./MyCard";

const MyCards: React.FC = () => {
  return (
    <Box marginBottom="100px">
      <Box sx={{ paddingTop: "20px", paddingBottom: "10px" }}>
        <SubHeading label="My Cards" />
      </Box>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1.05,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <MyCard
            balance="1,256,90"
            lastFourDigit="9584"
            fullDigit="4123 4567 8910 9584"
            expirydate="12/25"
            ccv="553"
            classname="MycardPurple"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MyCard
            balance="1,256,90"
            lastFourDigit="9584"
            fullDigit="4123 4567 8910 9584"
            expirydate="12/25"
            ccv="553"
            classname="MycardBlack"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MyCard
            balance="1,256,90"
            lastFourDigit="9584"
            fullDigit="4123 4567 8910 9584"
            expirydate="12/25"
            ccv="553"
            classname="MycardAsh"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default MyCards;
