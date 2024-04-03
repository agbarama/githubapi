import styles from "../styles/result.module.css";
import ResultItem from "./ResultItem";

const Result = ({ result, isGrid }) => {
  return (
    <div className={isGrid ? styles.resultListG : styles.resultList}>
      {result.map((res) => (
        <ResultItem key={res.id} res={res} isGrid={isGrid} />
      ))}
    </div>
  );
};

export default Result;
