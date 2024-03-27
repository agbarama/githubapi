import styles from "../styles/search.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = ({ result, setResult }) => {
  const [input, setInput] = useState("gabriel");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/users?q=${input}&page=${page}&per_page=10`
      )
      .then((res) => {
        console.log(res.data);

        console.log(res.data.items);
        setResult(res.data.items);
      })
      .catch((err) => {
        console.error("error fetching data:", err);
      });
  }, [page]);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button onClick={() => page > 1 && setPage(page - 1)}>Back</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Search;
