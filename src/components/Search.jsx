import styles from "../styles/search.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = ({ result, setResult, page, setPage, setIsLoading }) => {
  const [input, setInput] = useState("");
  const [isUser, setIsUser] = useState(true);
  const [url, setUrl] = useState();

  const handleCheck = () => {
    if (isUser) {
      setIsUser(false);
    } else {
      setIsUser(true);
    }
  };

  useEffect(() => {
    axios
      .get(
        // isUser
        //   ? `https://api.github.com/search/users?q=${input}&page=${page}&per_page=30`
        //   : `https://api.github.com/search/orgs?q=${input}&page=${page}&per_page=30`
        `https://api.github.com/search/users?q=${input}&page=${page}&per_page=30`
      )
      .then((res) => {
        console.log(res.data);

        console.log(res.data.items);
        setResult(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("error fetching data:", err);
      });
  }, [page]);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="search for users and organization"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button
          type="submit"
          className={styles.search}
          onClick={() => setPage(page + 1)}
        >
          {" "}
          search
        </button>
      </div>
      <div className={styles.radio}>
        <input
          className={styles.input}
          type="radio"
          name="user"
          id="user"
          checked={isUser}
          onChange={handleCheck}
        />
        <label className={styles.label} htmlFor="" onClick={handleCheck}>
          User
        </label>

        <input
          className={styles.input}
          type="radio"
          name="organization"
          id="organization"
          checked={!isUser}
          onChange={handleCheck}
        />
        <label
          className={styles.label}
          htmlFor="organization"
          onClick={handleCheck}
        >
          Organization
        </label>
      </div>
    </div>
  );
};

export default Search;
