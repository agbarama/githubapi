import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Search from "./components/Search";
import Container from "./components/Container";
import Buttons from "./components/Buttons";
import DisplayMode from "./components/DisplayMode";

function App() {
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [isGrid, setIsGrid] = useState(true);

  return (
    <>
      <Navbar />
      <Container>
        <Search
          result={result}
          setResult={setResult}
          page={page}
          setPage={setPage}
        />
        <DisplayMode isGrid={isGrid} setIsGrid={setIsGrid} />
        <Result result={result} isGrid={isGrid} />
        <Buttons page={page} setPage={setPage} isGrid={isGrid} />
      </Container>
    </>
  );
}

export default App;
