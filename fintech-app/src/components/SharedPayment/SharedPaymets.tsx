import { Box, Stack } from "@mui/system";
import SubHeading from "../../Global/SubHeading";
import { useAppSelector } from "../../store/hooks";
import SharedPayment from "./SharedPayment";

const SharedPaymets = () => {
  const txns = useAppSelector((state) => state.sharedPays);
  return (
    <Box component="section">
      <Stack spacing={1}>
        <SubHeading label="Shared Pay" />
        {txns.map((txn) => (
          <SharedPayment key={txn.id} {...txn} />
        ))}
      </Stack>
    </Box>
  );
};

export default SharedPaymets;
