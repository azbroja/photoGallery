import React, { useEffect, useState } from "react";
import axios from "axios";

const Images = (props) => {
  let images = JSON.parse(localStorage.getItem("images") || "[]");

  return (
    <>
      <p>
        {images.map((image) => (
          <p key={image.index}>
            <img src={image} alt={image} onClick={props.handleOnRemove} />
          </p>
        ))}
      </p>
    </>
  );
};

export default Images;
