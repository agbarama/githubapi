import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Search from "./components/Search";
import Container from "./components/Container";
import Buttons from "./components/Buttons";

function App() {
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);

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
        <Result result={result} />
        <Buttons page={page} setPage={setPage} />
      </Container>
    </>
  );
}

export default App;
