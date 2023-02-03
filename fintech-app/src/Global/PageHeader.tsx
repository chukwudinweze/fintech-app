import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const PageHeader: React.FC<{ label: string }> = ({ label }) => {
  const navigate = useNavigate();
  const navBack = () => {
    navigate(-1);
  };
  return (
    <Box
      sx={{
        width: "100%",
        color: "#fff",
        marginTop: "10px",
        paddingLeft: "20px",
        position: "fixed",
        top: "0",
        right: "0",
      }}
    >
      <Stack direction="row" spacing={10}>
        <IconButton aria-label="icon-button" onClick={navBack}>
          <ArrowBackIosNewIcon sx={{ color: "#FFF" }} />
        </IconButton>
        <Typography color="#fff" variant="h5">
          {label}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PageHeader;
