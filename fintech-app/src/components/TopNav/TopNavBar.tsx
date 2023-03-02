import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import HambuggerMenuBar from "./HambuggerMenuBar";
import Profile from "../../Global/Profile";

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
          <HambuggerMenuBar />
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
            <Profile />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default TopNavBar;
