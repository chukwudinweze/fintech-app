import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar, Stack } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const TopNavBar: React.FC = () => {
  const transactionsLength = useAppSelector(
    (state) => state.completedTransactions.length
  );
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
          <Typography
            variant="h5"
            component="h5"
            sx={{ flexGrow: 1, fontWeight: "900" }}
          >
            Quipay
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 4, sm: 2, md: 4 }}
          >
            <Link to="/notification">
              <Badge color="error" badgeContent={transactionsLength} max={9}>
                <NotificationsNoneIcon
                  style={{ color: "fff" }}
                  sx={{ fontSize: "30px" }}
                />
              </Badge>
            </Link>
            <Avatar
              sx={{
                bgcolor: deepPurple[900],
                height: 20,
                width: 20,
                padding: "18px",
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
