import { useRef } from "react";
import styles from "../styles/resultitem.module.css";

const ResultItem = ({ res, isGrid, ...rest }) => {
  const linkRef = useRef(null);

  const handleClick = () => {
    if (isGrid && linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <div
      className={`${styles.item} ${isGrid ? styles.listItem : styles.item}`}
      onClick={handleClick}
    >
      <div className={styles.div}>
        <img className={styles.img} src={res.avatar_url} alt="user" />
        <div className={styles.name}>{res.login}</div>
      </div>
      <a
        className={styles.profile}
        href={res.html_url}
        ref={linkRef}
        target="_blank"
      >
        view profile
      </a>
    </div>
  );
};

export default ResultItem;
