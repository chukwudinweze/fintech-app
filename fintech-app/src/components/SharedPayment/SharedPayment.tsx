import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import SharedPayLogo from "../../assets/SharedPaymentLogo.png";

type propsType = {
  initiator: string;
  purpose: string;
  expringDate: string;
  amount: string;
  status: string;
};

const SharedPayment: React.FC<propsType> = ({
  initiator,
  purpose,
  expringDate,
  amount,
  status,
}) => {
  return (
    <Box
      component="article"
      sx={{
        backgroundColor: "#ffffff",
        padding: "16px",
        borderRadius: "10px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            alt="shared pay"
            src={SharedPayLogo}
            sx={{ width: 56, height: 56 }}
          />
          <Stack>
            <Typography color="#27173e" fontSize="12px" fontWeight="700">
              {initiator}
            </Typography>
            <Typography color="#958d9e" fontSize="12px">
              {purpose}
            </Typography>
            <Typography color="#ff396f" fontSize="12px">
              {expringDate}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column">
          <Typography
            color={status === "pending" ? "#FFC000" : "#ff396f"}
            fontWeight="700"
          >
            {amount}
          </Typography>
          <Typography color="#958d9e" fontSize="12px">
            {status}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedPayment;
