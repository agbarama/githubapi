import styles from "../styles/buttons.module.css";

const Buttons = ({ page, setPage, isGrid }) => {
  return (
    <div className={`${styles.buttons} ${!isGrid ? styles.isList : ""}`}>
      <button
        className={`${styles.btn} ${styles.white}`}
        onClick={() => page > 1 && setPage(page - 1)}
      >
        Back
      </button>
      <button className={styles.btn} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
