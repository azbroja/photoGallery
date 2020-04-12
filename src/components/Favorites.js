import React, { useEffect, useState } from "react";
import axios from "axios";

const Images = (props) => {
  let images = JSON.parse(localStorage.getItem("images") || "[]");

  return (
    <>
      <p>
        {images.map((image) => (
          <p key={image.id}>
            <img src={image} alt={image} />
          </p>
        ))}
      </p>
    </>
  );
};

export default Images;
