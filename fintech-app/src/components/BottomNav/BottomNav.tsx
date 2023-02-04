import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HistoryIcon from "@mui/icons-material/History";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Paper } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import styles from "./BottomNav.module.css";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const drawerActive = useAppSelector((state) => state.userInterface.drawer);
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
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
        <BottomNavigationAction
          label="Support"
          icon={<SupportAgentOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Profie"
          icon={<PersonOutlineOutlinedIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            navigate("/transactionhistory");
          }}
          label="History"
          icon={<HistoryIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
