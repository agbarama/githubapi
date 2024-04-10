import styles from "../styles/search.module.css";

const Search = ({ input, setInput, isUser, setIsUser, setPage, setSearch }) => {
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

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="search for users and organization"
          value={input}
          onChange={(e) => {
            setSearch(false);
            setInput(e.currentTarget.value);
            setPage(1);
          }}
        />
        <button
          type="submit"
          className={styles.search}
          onClick={() => setSearch(true)}
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
