import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import styles from "./Experiment.module.css";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { toggleNav, deActivateDrawer } from "../store/InterfaceSlice";
import { useNavigate } from "react-router-dom";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

type Anchor = "bottom";

export default function SwipeableTemporaryDrawer() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ddd = useAppSelector((state) => state.userInterface.drawer);
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        dispatch(toggleNav());
        return;
      }
      // dispatch(deActivateDrawer());
      dispatch(toggleNav());
      setState({ ...state, [anchor]: open });
      // dispatch(deActivateDrawer());
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Form submitted!");
    toggleDrawer("bottom", false);
    dispatch(deActivateDrawer());
    navigate("/notification");
  };
  console.log(ddd);
  return (
    <div className={styles.drawar}>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{"vvv"}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box p={2}>
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{ paddingTop: "40px" }}
                  id="outlined-select-currency-native"
                  select
                  label="From "
                  defaultValue="EUR"
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  fullWidth
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  sx={{ paddingTop: "40px" }}
                  id="outlined-select-currency-native"
                  select
                  label="From "
                  defaultValue="EUR"
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  fullWidth
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <Box mt={2}>
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Withdraw
                  </Button>
                </Box>
              </form>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
