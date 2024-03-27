import styles from "../styles/resultitem.module.css";

const ResultItem = ({ res }) => {
  return (
    <div className={styles.item}>
      {/* <img className={styles.img} src={res.avatar_url} alt="" /> */}
      <div className={styles.name}>{res.login}</div>
    </div>
  );
};

export default ResultItem;
