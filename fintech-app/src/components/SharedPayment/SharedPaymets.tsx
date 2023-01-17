import { Box, Stack } from "@mui/system";
import SubHeading from "../../Global/SubHeading";
import SharedPayment from "./SharedPayment";

const SharedPaymets = () => {
  return (
    <Box component="section">
      <Stack spacing={1}>
        <SubHeading label="Shared Pay" />
        <SharedPayment
          initiator="Nweze"
          purpose="Mum's Birthday preparation"
          expringDate="Expires 2nd Feb"
          amount="-$186"
          status="pending"
        />
        <SharedPayment
          initiator="Nweze"
          purpose="Mum's Birthday preparation"
          expringDate="Expires 2nd Feb"
          amount="-$186"
          status="pending"
        />
        <SharedPayment
          initiator="Nweze"
          purpose="Mum's Birthday preparation"
          expringDate="Expires 2nd Feb"
          amount="-$186"
          status="pending"
        />
      </Stack>
    </Box>
  );
};

export default SharedPaymets;
