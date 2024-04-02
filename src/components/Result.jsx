import styles from "../styles/result.module.css";
import ResultItem from "./ResultItem";

const Result = ({ result, isGrid }) => {
  return (
    <div className={isGrid ? styles.resultList : styles.resultListL}>
      {result.map((res) => (
        <ResultItem key={res.id} res={res} isGrid={isGrid} />
      ))}
    </div>
  );
};

export default Result;
