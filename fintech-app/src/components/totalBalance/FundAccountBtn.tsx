import AddIcon from "@mui/icons-material/Add";
import styles from "./FundAccountBtn.module.css";
const FundAccountBtn = () => {
  return (
    <button className={styles.FundAccountBtn}>
      <AddIcon className={styles.AddIcon} />
    </button>
  );
};

export default FundAccountBtn;
