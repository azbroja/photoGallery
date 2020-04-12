import React, { useEffect, useState } from "react";
import axios from "axios";

const Images = (props) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: props.value },
        headers: {
          Authorization:
            "Client-ID 1BwzzkO521HiOXnMklfMWTRrvwyvuN-X9d1hlUecWyo",
        },
      })
      .then((resp) => {
        setImages(resp.data.results);
        console.log(resp.data.results);
      });
  }, [props.value]);

  return (
    <>
      <p>{props.value}</p>

      {images.map((image) => (
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
