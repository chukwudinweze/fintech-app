import { Avatar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import noTransactionImg from "../assets/no-credit-card.png";

const NoTxnRecord = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      minHeight="100vh"
      sx={{ background: "#fff" }}
      paddingTop="150px"
      width="100%"
    >
      <Stack spacing={2} width="100%" alignItems="center" padding="0 20px">
        <Avatar
          alt="Remy Sharp"
          src={noTransactionImg}
          sx={{
            width: { xs: "150px", sm: "200px" },
            height: { xs: "150px", sm: "200px" },
            padding: "5px",
            background: "#6236ff",
            border: "1px solid #6236ff",
          }}
        />
        <Typography textAlign="center" variant="h6" fontWeight={700}>
          No Transaction Recorded Yet
        </Typography>
        <Box textAlign="center">
          <Typography variant="body1">
            Get started with Quickpay by funding your account. Withdraw,
            transfer, exchange currency, and pay bills easily.
            <Typography fontWeight="700" color="#6236ff">
              <Link color="#6236ff" to="/">
                Start now!
              </Link>
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default NoTxnRecord;
