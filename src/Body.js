import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image";

function Body() {
  const [photo, setPhoto] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=EyhmsW6LlTTDO3bR4uRNpRrLOUO6ySRsBWDXxP7v&count=1`
      )
      .then(response => {
        const nasaPic = response.data[0];
        console.log(response.data[0]);
        setPhoto(nasaPic);
      });
  }, [refresh]);

  return (
    <div className="img-block">
      <button onClick={() => setRefresh(refresh + 1)}>NEW IMAGE</button>

      <a href={photo.hdurl}>
        <Image imgUrl={photo.url} />
      </a>
      <p className="hd-click">Click image to view in HD</p>

      <h2>{photo.title}</h2>
      <h3>Date: {photo.date}</h3>
      <p className="explanation">{photo.explanation}</p>
    </div>
  );
}

export default Body;
