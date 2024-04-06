import styles from "../styles/search.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = ({ result, setResult, page, setPage, setIsLoading }) => {
  const [input, setInput] = useState("");
  const [isUser, setIsUser] = useState(true);

  const handleUserCheck = () => {
    if (!isUser) {
      setIsUser(true);
      setPage(1);
    }
  };

  const handleOrgCheck = () => {
    if (isUser) {
      setIsUser(false);
      setPage(1);
    }
  };

  const params = {
    q: isUser ? input : `${input}+type:org`,
    page: page,
    per_page: 30,
  };
  console.log(params);

  useEffect(() => {
    if (input.length > 0) {
      axios
        .get(
          isUser
            ? `https://api.github.com/search/users?q=${input}&page=${page}&per_page=30`
            : `https://api.github.com/search/users?q=${input}+type:org&page=${page}&per_page=30
        `
        )
        .then((res) => {
          setResult(res.data.items);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("error fetching data:", err);
        });
    }
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
          onChange={handleUserCheck}
        />
        <label className={styles.label} htmlFor="" onClick={handleUserCheck}>
          User
        </label>

        <input
          className={styles.input}
          type="radio"
          name="organization"
          id="organization"
          checked={!isUser}
          onChange={handleOrgCheck}
        />
        <label
          className={styles.label}
          htmlFor="organization"
          onClick={handleOrgCheck}
        >
          Organization
        </label>
      </div>
    </div>
  );
};

export default Search;
