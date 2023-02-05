import { Avatar, Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import paddlock from "../../assets/savePaddlock.png";
import CreateSavingsBtn from "./CreateSavingsBtn";

const Savings = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      minHeight="100vh"
      sx={{ background: "#fff" }}
      paddingTop="150px"
    >
      <Stack spacing={2} width="100%" alignItems="center" padding="0 20px">
        <Avatar
          alt="Remy Sharp"
          src={paddlock}
          sx={{
            width: { xs: "150px", sm: "200px" },
            height: { xs: "150px", sm: "200px" },
            padding: "5px",
            background: "#6236ff",
            border: "1px solid #6236ff",
          }}
        />
        <Typography variant="h5" fontWeight={700}>
          What is Regular Savings
        </Typography>
        <Box textAlign="center">
          <Typography variant="body1">
            Save money regularly in a locked plan for at least 3 months. Enjoy
            your returns
          </Typography>
          <Typography variant="body1" color="#958d9e" fontSize="14px">
            Exclusively for customers who has used quickpay for up to a month
          </Typography>
        </Box>

        <CreateSavingsBtn />
      </Stack>
    </Box>
  );
};

export default Savings;
