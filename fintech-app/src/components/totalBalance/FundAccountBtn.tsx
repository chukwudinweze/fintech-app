import AddIcon from "@mui/icons-material/Add";
import styles from "./FundAccountBtn.module.css";

import { withdrawNaira } from "../../store/nairaAccountSlice";
import { useDispatch } from "react-redux/es/exports";

const FundAccountBtn = () => {
  const dispatch = useDispatch();

  const fundAccountHandler = () => {
    dispatch(withdrawNaira(100));
  };
  return (
    <button className={styles.FundAccountBtn}>
      <AddIcon className={styles.AddIcon} />
    </button>
  );
};

export default FundAccountBtn;
