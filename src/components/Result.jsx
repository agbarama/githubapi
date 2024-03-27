import styles from "../styles/result.module.css";
import ResultItem from "./ResultItem";

const Result = ({ result }) => {
  return (
    <div>
      {result.map((res) => (
        <ResultItem key={res.id} res={res} />
      ))}
    </div>
  );
};

export default Result;
