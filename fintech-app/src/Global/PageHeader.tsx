import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

const PageHeader: React.FC<{ label: string }> = ({ label }) => {
  const navigate = useNavigate();
  const navBack = () => {
    navigate(-1);
  };
  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        color: "#fff",
        paddingLeft: "20px",
        position: "absolute",
        top: "0",
        right: "0",
      }}
    >
      <Stack
        sx={{ minHeight: "50px" }}
        direction="row"
        alignContent="center"
        spacing={{ xs: 5, sm: 20, lg: 50 }}
      >
        <Box alignSelf="center">
          <IconButton aria-label="icon-button" onClick={navBack}>
            <ArrowBackIosNewIcon sx={{ color: "#FFF" }} />
          </IconButton>
        </Box>
        <Box component="div" alignSelf="center">
          <Typography
            color="#fff"
            variant="h5"
            fontWeight={700}
            fontSize={{ xs: "20px", sm: "25px" }}
          >
            {label}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default PageHeader;
