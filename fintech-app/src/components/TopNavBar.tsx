import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Stack } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const TopNavBar: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingBottom: "200px",
        width: "100%",
        bgcolor: "primary.main",
      }}
    >
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quipay
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 4, sm: 2, md: 4 }}
          >
            <Badge color="error" badgeContent={10} max={9}>
              <NotificationsIcon />
            </Badge>
            <Avatar
              sx={{
                bgcolor: deepPurple[900],
                height: 20,
                width: 20,
                padding: "6px",
              }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              <Typography variant="h6" sx={{ fontSize: "16px" }}>
                {" "}
                NC
              </Typography>
            </Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default TopNavBar;
