import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Favorites from "./components/Favorites";
import Navigation from "./components/Navigation";

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

  const handleOnRemove = (e) => {
    console.log(e.target.src);
    const deleteIndex = images.indexOf(e.target.src);

    imagesSend = images.splice(deleteIndex, 1);
    localStorage.setItem("images", JSON.stringify(imagesSend));
    console.log(images);
  };

  const handleAddToFavorites = (e) => {
    console.log(images);
    imagesSend.push(e.target.src);
    console.log(images);

    localStorage.setItem("images", JSON.stringify(imagesSend));
  };

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Route
          exact
          path="/"
          render={(props) => (
            <Images
              {...props}
              handleAddToFavorites={handleAddToFavorites}
              handleOnClick={handleOnClick}
              value={search}
            />
          )}
        />
        <Route
          path="/favorites"
          exact
          render={(props) => (
            <Favorites
              {...props}
              images={favorites}
              handleOnRemove={handleOnRemove}
            />
          )}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
