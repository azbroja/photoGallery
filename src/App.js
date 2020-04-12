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
  let images = JSON.parse(localStorage.getItem("images") || "[]");
  let imagesSend = [...images];

  const handleOnClick = (e) => {
    setSearch(e.target.value);
  };

  const handleAddToFavorites = (e) => {
    console.log(images);
    imagesSend.push(e.target.src);
    console.log(images);

    localStorage.setItem("images", JSON.stringify(imagesSend));

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
