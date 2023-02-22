import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { currencySymbol } from "../../store/currencySymbolEnum";
import { useAppSelector } from "../../store/hooks";

const BookingNote = () => {
  const pendingTxn = useAppSelector((state) => state.pendindTransaction);
  const totalAmount = pendingTxn.booking.price * +pendingTxn.booking.seatNo;
  const sitNo = pendingTxn.booking.seatNo;
  return (
    <Stack alignItems="center" justifyContent="center">
      <Typography variant="h6" fontWeight="700" gutterBottom>
        Verify this Transaction
      </Typography>
      <Typography
        textAlign="center"
        variant="body1"
        component="p"
        color="#958d9e"
        padding="0 10px"
      >
        <Typography component="span" fontWeight={600} color="#6236ff">
          {currencySymbol.NAIRA}
          {totalAmount}
        </Typography>{" "}
        debit will be made from your account for {sitNo}
        {+sitNo > 1 ? " seats" : " seat"}.
      </Typography>
      <Typography variant="body1" component="p" color="#958d9e">
        Are you sure?
      </Typography>
    </Stack>
  );
};

export default BookingNote;
