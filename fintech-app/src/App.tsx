import React from "react";
import HomePage from "./Pages/HomePage";

import { createTheme, ThemeProvider } from "@mui/material/styles";
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
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
