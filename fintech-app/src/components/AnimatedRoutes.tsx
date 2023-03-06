import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ConfirmBookingPage from "../Pages/ConfirmBookingPage";
import ConfirmTxnPage from "../Pages/ConfirmTxnPage";
import DashBoard from "../Pages/DashBoard";
import ExpensesPage from "../Pages/ExpensesPage";
import LoanPage from "../Pages/LoanPage";
import NotificationPage from "../Pages/NotificationPage";
import PaymentReciptPage from "../Pages/PaymentReciptPage";
import SavingsPage from "../Pages/SavingsPage";
import SharedPaymentPage from "../Pages/SharedPaymentPage";
import SupportPage from "../Pages/SupportPage";
import TransactionHistoryPage from "../Pages/TransactionHistoryPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  const [delayedLocation, setDelayedLocation] = useState(location);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedLocation(location);
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [location]);
  return (
    <AnimatePresence initial={false}>
      <Routes location={delayedLocation} key={location.pathname}>
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
        <Route path="transactionhistory" element={<TransactionHistoryPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
