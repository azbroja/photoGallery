import React, { useEffect, useState } from "react";
import axios from "axios";

const Images = (props) => {
  let images = JSON.parse(localStorage.getItem("images") || "[]");

  return (
    <>
      <p>
        <img src={props.images} alt={props.images} />
      </p>
    </>
  );
};

export default Images;
