import React from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useNavigate } from "react-router-dom";
import TransactionBtn from "./TransactionBtn";

const CreditCards = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/notification");
  };
  return (
    <TransactionBtn
      background="#1dcc70"
      label="Cards"
      icon={<CreditCardIcon />}
      onClick={handleClick}
    />
  );
};

export default CreditCards;
