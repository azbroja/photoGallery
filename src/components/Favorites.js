import React, { useEffect, useState } from "react";
import axios from "axios";

const Images = (props) => {
  let images = JSON.parse(localStorage.getItem("images") || "[]");

  return (
    <>
      <p>{props.images}</p>
      {props.images.map((image) => (
        <p key={image.id}>
          <img
            src={image.urls.small}
            alt={image.urls.small}
            onClick={props.handleAddToFavorites}
          />
        </p>
      ))}
    </>
  );
};

export default Images;
