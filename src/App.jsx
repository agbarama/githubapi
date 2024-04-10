import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Search from "./components/Search";
import Container from "./components/Container";
import Buttons from "./components/Buttons";
import DisplayMode from "./components/DisplayMode";

function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const [isUser, setIsUser] = useState(true);
  const [page, setPage] = useState(1);
  const [isGrid, setIsGrid] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const request = () => {
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
  };

  useEffect(() => {
    if (input.length > 0 && search) {
      request();
    }
  }, [page, input, search]);

  return (
    <>
      <Navbar />
      <Container>
        <Search
          input={input}
          setInput={setInput}
          isUser={isUser}
          setIsUser={setIsUser}
          setPage={setPage}
          setSearch={setSearch}
        />
        <DisplayMode
          isGrid={isGrid}
          setIsGrid={setIsGrid}
          setResult={setResult}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <Result result={result} isGrid={isGrid} />
        <Buttons
          isUser={isUser}
          page={page}
          setPage={setPage}
          isGrid={isGrid}
          isLoading={isLoading}
        />
      </Container>
    </>
  );
}

export default App;
