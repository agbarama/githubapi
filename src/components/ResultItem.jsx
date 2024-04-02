import styles from "../styles/resultitem.module.css";

const ResultItem = ({ res, isGrid }) => {
  return (
    <div className={`${styles.item} ${isGrid ? styles.item : styles.listItem}`}>
      <div className={styles.div}>
        <img className={styles.img} src={res.avatar_url} alt="user" />
        <div className={styles.name}>{res.login}</div>
      </div>
      <a className={styles.profile} href={res.html_url}>
        view profile
      </a>
    </div>
  );
};

export default ResultItem;
