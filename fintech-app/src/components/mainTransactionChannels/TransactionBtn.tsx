import React, { MouseEventHandler } from "react";
import styles from "./TransactionBtn.module.css";

import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

type buttonProps = {
  background: string;
  icon: JSX.Element;
  label: string;
  onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

const TransactionBtn: React.FC<buttonProps> = ({
  background,
  icon,
  label,
  onClick,
}) => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <button
        onClick={onClick}
        className={styles.TransactionBtn}
        style={{ background }}
      >
        {icon}
      </button>
      <Typography
        mt={1.5}
        variant="body1"
        fontSize={{ xs: "0.688rem", sm: "0.688rem", md: "0.688rem" }}
        sx={{
          color: "#27173e",
          lineHeight: "1.2em",
          fontWeight: "500",
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export default TransactionBtn;
