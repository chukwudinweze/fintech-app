import { Box, Stack } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import styles from "./ConfirmTnxTemplate.module.css";
import React from "react";

const ConfirmTnxTemplate = () => {
  return (
    <Box>
      <Stack direction="row">
        <Avatar
          sx={{ width: 70, height: 70 }}
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
          variant="square"
        />
        <div className={styles.arrowContainer}>
          <div className={styles.arrow}></div>
        </div>
        <Avatar
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
          sx={{ width: 70, height: 70 }}
          variant="square"
        />
      </Stack>
    </Box>
  );
};

export default ConfirmTnxTemplate;
