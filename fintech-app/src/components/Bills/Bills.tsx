import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Typography } from "@mui/material";
import BillsLayout from "./BillsLayout";
import "swiper/css";
import "swiper/css/free-mode";
import EdenLogo from "../../assets/edenlife.webp";
import iFitnessLogo from "../../assets/iFitness.png";
import ShuttlerLogo from "../../assets/shuttlers.png";
import Netflix from "../../assets/netflix.png";
import DstvLogo from "../../assets/Dstvlogo.jpg";
import SubHeading from "../../Global/SubHeading";
import styles from "./Bills.module.css";

const Bills = () => {
  return (
    <Box>
      <Box sx={{ marginTop: "20px" }}>
        <SubHeading label="Monthly Bills" />
      </Box>
      <Swiper
        className={styles.swipper}
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
          <BillsLayout
            img={EdenLogo}
            amount={85.5}
            date="2 Feb"
            label="Eden Life"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BillsLayout
            img={iFitnessLogo}
            amount={71.3}
            date="9 Sept"
            label="iFitness"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BillsLayout
            img={ShuttlerLogo}
            amount={50}
            date="14 April"
            label="Shutter"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BillsLayout
            img={Netflix}
            amount={16}
            date="5 June"
            label="Netflix"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BillsLayout img={DstvLogo} amount={30} date="9 May" label="DSTV" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Bills;
