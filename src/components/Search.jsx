import styles from "../styles/search.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = ({ result, setResult, page, setPage }) => {
  const [input, setInput] = useState("");

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
        placeholder="search for users and organization"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <div className={styles.search} onClick={() => setPage(page + 1)}>
        search
      </div>
    </div>
  );
};

export default Search;
