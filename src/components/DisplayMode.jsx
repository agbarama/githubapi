import styles from "../styles/displaymode.module.css";

const DisplayMode = ({ isGrid, setIsGrid, setResult }) => {
  const grid = () => {
    if (!isGrid) {
      setIsGrid(true);
      console.log(isGrid);
    }
  };

  const list = () => {
    if (isGrid) {
      setIsGrid(false);
      console.log(isGrid);
    }
  };
  return (
    <div className={`${styles.modeContainer} ${!isGrid ? styles.isList : ""}`}>
      <div className={styles.modeType}>
        <div
          className={`${styles.mode} ${isGrid ? styles.toggle : ""}`}
          onClick={grid}
        >
          Grid
        </div>
        <div
          className={`${styles.mode} ${!isGrid ? styles.toggle : ""}`}
          onClick={list}
        >
          List
        </div>
      </div>
      <div className={styles.clear} onClick={() => setResult([])}>
        clear
      </div>
    </div>
  );
};

export default DisplayMode;
