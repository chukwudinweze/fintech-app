import { Box } from "@mui/system";
import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import PageHeader from "../Global/PageHeader";

const SupportPage = () => {
  return (
    <Box>
      <PageHeader label="Support" color="#fff" backgroundColor="#6236ff" />
      <BottomNav />
    </Box>
  );
};

export default SupportPage;
