import { createTheme, ThemeProvider } from "@mui/material/styles";

import AnimatedRoutes from "./components/AnimatedRoutes";
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
        <AnimatedRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
