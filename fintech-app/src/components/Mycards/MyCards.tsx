import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SubHeading from "../../Global/SubHeading";
import { currencySymbol } from "../../store/currencySymbolEnum";
import { useAppSelector } from "../../store/hooks";
import MyCard from "./MyCard";

const MyCards: React.FC = () => {
  const dollarBalance = useAppSelector((state) => state.dollarAccount.balance);
  const euroBalance = useAppSelector((state) => state.euroAccount.balance);
  const nairaBalance = useAppSelector((state) => state.nairaAccount.balance);
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
            balance={dollarBalance}
            lastFourDigit="9584"
            fullDigit="4123 4567 8910 9584"
            expirydate="12/25"
            ccv="553"
            classname="MycardPurple"
            currency={currencySymbol.DOLLAR}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MyCard
            balance={euroBalance}
            lastFourDigit="9584"
            fullDigit="4123 4567 8910 9584"
            expirydate="12/25"
            ccv="553"
            classname="MycardBlack"
            currency={currencySymbol.EURO}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MyCard
            balance={nairaBalance}
            lastFourDigit="9584"
            fullDigit="4123 4567 8910 9584"
            expirydate="12/25"
            ccv="553"
            classname="MycardAsh"
            currency={currencySymbol.NAIRA}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default MyCards;
