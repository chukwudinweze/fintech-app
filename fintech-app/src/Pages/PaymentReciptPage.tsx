import PaymentRecipt from "../components/PaymentRecipt/PaymentRecipt";
import { motion } from "framer-motion";

const PaymentReciptPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PaymentRecipt />
    </motion.div>
  );
};

export default PaymentReciptPage;
