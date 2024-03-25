import styles from "../styles/search.module.css";
import React, { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
    </div>
  );
};

export default Search;
