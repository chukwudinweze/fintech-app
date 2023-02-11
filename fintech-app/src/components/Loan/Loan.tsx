import { Avatar, Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import loanImg from "../../assets/loan.png";
import CreateLoanBtn from "./CreateLoanBtn";

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
          src={loanImg}
          sx={{
            width: { xs: "150px", sm: "200px" },
            height: { xs: "150px", sm: "200px" },
            padding: "5px",
            background: "#6236ff",
            border: "1px solid #6236ff",
          }}
        />
        <Typography variant="h5" fontWeight={700}>
          How It Works
        </Typography>
        <Box textAlign="center">
          <Typography variant="body1">
            Our loan plan offers easy approval and a flexible payback option.
            Upon approval, you can choose a repayment schedule that fits your
            budget.
          </Typography>
          <Typography variant="body1" color="#958d9e" fontSize="14px">
            Exclusively for salaried customers who has used quickpay for up to a
            month
          </Typography>
        </Box>

        <CreateLoanBtn />
      </Stack>
    </Box>
  );
};

export default Savings;
