import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Divider, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "../../Global/Profile";
import { Stack } from "@mui/system";
import Close from "@mui/icons-material/Close";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Link } from "react-router-dom";

type Anchor = "left";
const HambuggerMenuBar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack spacing={2} direction="row" padding="20px 5px" paddingLeft="20px">
        <Profile />
        <Stack>
          <Typography>Chukwudi Nweze</Typography>
          <Typography color="#a9abad">0145638596</Typography>
        </Stack>
        <IconButton
          onClick={toggleDrawer("left", true)}
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ color: "#6236ff" }}
        >
          <Close />
        </IconButton>
      </Stack>

      <Divider />
      <Stack spacing={1} paddingLeft="20px" marginTop="40px">
        <Link to="/notification">
          <Stack direction="row" alignItems="center">
            <IconButton
              onClick={toggleDrawer("left", true)}
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ color: "#6236ff" }}
            >
              <NotificationsNone />
            </IconButton>
            <Typography fontWeight={700} fontSize="18px" color="#6236ff">
              Notification
            </Typography>
          </Stack>
        </Link>
        <Link to="/support">
          <Stack direction="row" alignItems="center">
            <IconButton
              onClick={toggleDrawer("left", true)}
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ color: "#6236ff" }}
            >
              <QuestionMarkIcon />
            </IconButton>
            <Typography fontWeight={700} fontSize="18px" color="#6236ff">
              Get Help
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Box>
  );

  return (
    <div>
      <>
        <IconButton
          onClick={toggleDrawer("left", true)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </>
    </div>
  );
};

export default HambuggerMenuBar;
