import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Paper } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import styles from "./BottomNav.module.css";

const BottomNav = () => {
  const drawerActive = useAppSelector((state) => state.userInterface.drawer);
  const [value, setValue] = React.useState(0);

  console.log(drawerActive);

  return (
    <Paper
      className={drawerActive ? styles.hideBottomNav : styles.showBottomNav}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ justifyContent: "space-between" }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction label="Menu" icon={<MenuOutlinedIcon />} />
        <BottomNavigationAction
          label="Support"
          icon={<SupportAgentOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Profie"
          icon={<PersonOutlineOutlinedIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
