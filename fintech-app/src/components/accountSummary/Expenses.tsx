import { Box } from "@mui/material";
import PageHeader from "../../Global/PageHeader";
import BottomNav from "../BottomNav/BottomNav";
import Expense from "./Expense";
import PieChart from "./PieChart";

export default function App() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        minHeight="100vh"
        sx={{
          background: "#6236ff",
          width: "100%",
        }}
      >
        <PageHeader label="Your Expenses" />
        <PieChart />
        <Expense />
      </Box>
    </>
  );
}
