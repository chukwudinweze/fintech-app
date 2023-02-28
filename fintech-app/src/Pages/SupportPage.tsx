import { Avatar, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import PageHeader from "../Global/PageHeader";
import supportImg from "../assets/customer-service.png";

const SupportPage = () => {
  return (
    <Box>
      <PageHeader label="Support" color="#fff" backgroundColor="#6236ff" />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "150px",
        }}
      >
        <Box
          sx={{
            padding: "60px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={supportImg}
            sx={{
              width: { xs: "150px", sm: "200px" },
              height: { xs: "150px", sm: "200px" },
              padding: "25px",
              background: "#6236ff",
              border: "1px solid #6236ff",
            }}
          />
          <Stack spacing={1}>
            <Typography fontWeight={700}>
              <a href="tel:5551234567">Call customer care 1</a>
            </Typography>
            <Typography fontWeight={700}>
              <a href="tel:5551234567">Call customer care 2</a>
            </Typography>
            <Typography fontWeight={700}>
              <a href="tel:5551234567">Call customer care 3</a>
            </Typography>
          </Stack>
        </Box>
      </Box>
      <BottomNav />
    </Box>
  );
};

export default SupportPage;
