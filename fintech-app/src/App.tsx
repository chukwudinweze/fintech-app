import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NotificationPage from "./Pages/NotificationPage";
import ConfirmTxnPage from "./Pages/ConfirmTxnPage";
import PaymentReciptPage from "./Pages/PaymentReciptPage";
import ExpensesPage from "./Pages/ExpensesPage";
import TransactionHistoryPage from "./Pages/TransactionHistoryPage";
import SavingsPage from "./Pages/SavingsPage";
import LoanPage from "./Pages/LoanPage";
import SharedPaymentPage from "./Pages/SharedPaymentPage";
import ConfirmBookingPage from "./Pages/ConfirmBookingPage";
import SupportPage from "./Pages/SupportPage";
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
          <Route path="confirmtxn" element={<ConfirmTxnPage />} />
          <Route path="paymentrecipt" element={<PaymentReciptPage />} />
          <Route path="totalexpenses" element={<ExpensesPage />} />
          <Route path="quipaysavings" element={<SavingsPage />} />
          <Route path="quipayloan" element={<LoanPage />} />
          <Route path="sharedpayment" element={<SharedPaymentPage />} />
          <Route path="confirmbooking" element={<ConfirmBookingPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route
            path="transactionhistory"
            element={<TransactionHistoryPage />}
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
