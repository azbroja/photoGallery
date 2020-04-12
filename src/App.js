import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";

import Images from "./components/Images";

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(
    localStorage.getItem("images") || []
  );

  const handleOnClick = (e) => {
    setSearch(e.target.value);
  };

  const handleAddToFavorites = (e) => {
    localStorage.setItem("images", JSON.stringify(e.target.src));
    setFavorites(e.target.src);
  };

  return (
    <>
      <SearchBar handleOnClick={handleOnClick} />
      <Images handleAddToFavorites={handleAddToFavorites} value={search} />
      Favorites
      <Favorites images={favorites} />
    </>
  );
}

export default App;
