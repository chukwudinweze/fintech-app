import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NotificationPage from "./Pages/NotificationPage";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Poppins", sans-serif',
    },
    palette: {
      primary: {
        main: "#6236ff", // desired background color of AppBar
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="notification" element={<NotificationPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
