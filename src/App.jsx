import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Search from "./components/Search";
import avatar1 from "./assets/1608908_github_icon.svg";
import avatar2 from "./assets/react.svg";

function App() {
  const [result, setResult] = useState([]);

  return (
    <>
      <Navbar />
      <Search result={result} setResult={setResult} />
      <Result result={result} />
    </>
  );
}

export default App;
