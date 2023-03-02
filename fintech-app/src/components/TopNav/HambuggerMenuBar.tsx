import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "../../Global/Profile";
import { Stack } from "@mui/system";
import { useAppSelector } from "../../store/hooks";
import { currencySymbol } from "../../store/currencySymbolEnum";
import WithdrawMoney from "../mainTransactionChannels/WithdrawMoney";
import TransferMoney from "../mainTransactionChannels/TransferMoney";
import ExchangeCurrency from "../mainTransactionChannels/ExchangeCurrency";
import CreditCards from "../mainTransactionChannels/CreditCards";

type Anchor = "left";
const HambuggerMenuBar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const [hideBalance] = React.useState<boolean>(false);
  // get total balance of each currency
  const nairaBalance = useAppSelector((state) => state.nairaAccount.balance);
  const dollarBalance = useAppSelector((state) => state.dollarAccount.balance);
  const euroBalance = useAppSelector((state) => state.euroAccount.balance);
  // get currency mode
  const currency = useAppSelector((state) => state.currency.currencySymbol);

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
      <Stack spacing={3}>
        <Stack spacing={2} direction="row" padding="20px 5px">
          <Profile />
          <Stack>
            <Typography>Chukwudi Nweze</Typography>
            <Typography color="#a9abad">0145638596</Typography>
          </Stack>
        </Stack>
      </Stack>
      {/* <Divider /> */}
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
