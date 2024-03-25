import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Search from "./components/Search";

function App() {
  const [result, setResult] = useState([]);
  return (
    <>
      <Navbar />
      <Search setResult={setResult} />
      <Result result={result} />
    </>
  );
}

export default App;
