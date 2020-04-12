import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Images from "./components/Images";

function App() {
  const [search, setSearch] = useState("");

  const handleOnClick = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <SearchBar handleOnClick={handleOnClick} />
      <Images value={search} />
    </>
  );
}

export default App;
