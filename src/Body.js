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
    <div className="img-container">
      <button onClick={() => setRefresh(refresh + 1)}>NEW IMAGE</button>
      <Image imgUrl={photo.url} />
    </div>
  );
}

export default Body;
