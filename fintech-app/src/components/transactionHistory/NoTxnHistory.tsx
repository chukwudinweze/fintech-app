import { Avatar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import nothingIcon from "../../assets/nothing.png";

const NoTxnHistory = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ background: "#fff" }}
      paddingTop="150px"
      width="100%"
    >
      <Stack spacing={2} width="100%" alignItems="center" padding="0 20px">
        <Avatar
          alt="Remy Sharp"
          src={nothingIcon}
          sx={{
            width: { xs: "150px", sm: "200px" },
            height: { xs: "150px", sm: "200px" },
            padding: "30px",
            background: "#6236ff",
            border: "1px solid #6236ff",
          }}
        />
        <Typography textAlign="center" variant="h6" fontWeight={700}>
          History Empty
        </Typography>
      </Stack>
    </Box>
  );
};

export default NoTxnHistory;
