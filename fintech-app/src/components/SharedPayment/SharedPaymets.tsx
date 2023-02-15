import { Box, Stack } from "@mui/system";
import SubHeading from "../../Global/SubHeading";
import SharedPayment from "./SharedPayment";

const SharedPaymets = () => {
  return (
    <Box component="section">
      <Stack spacing={1}>
        <SubHeading label="Shared Pay" />
        <SharedPayment
          initiator="Adekunle"
          purpose="Mum's Birthday preparation"
          expringDate="Expires 2nd Feb"
          amount="$66"
          status="pending"
          link="/sharedpayment"
        />
        <SharedPayment
          initiator="Ciroma"
          purpose="Mum's Birthday preparation"
          expringDate="Expires 2nd Feb"
          amount="$40"
          status="pending"
          link="/sharedpayment"
        />
        <SharedPayment
          initiator="Akpan"
          purpose="Mum's Birthday preparation"
          expringDate="Expires 2nd Feb"
          amount="$27"
          status="pending"
          link="/sharedpayment"
        />
      </Stack>
    </Box>
  );
};

export default SharedPaymets;
