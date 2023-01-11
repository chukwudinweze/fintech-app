import Button from "@mui/material/Button";
import React from "react";
import styles from "./TransactionBtn.module.css";

import { Stack } from "@mui/system";

type buttonProps = {
  background: string;
  icon: JSX.Element;
  label: string;
};

const TransactionBtn: React.FC<buttonProps> = ({ background, icon, label }) => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <button className={styles.TransactionBtn} style={{ background }}>
        {icon}
      </button>
      <p>{label}</p>
    </Stack>
  );
};

export default TransactionBtn;
