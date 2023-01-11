import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./FundAccountBtn.module.css";
const FundAccountBtn = () => {
  return (
    <Button className={styles.FundAccountBtn} variant="outlined">
      <AddIcon className={styles.AddIcon} />
    </Button>
  );
};

export default FundAccountBtn;
