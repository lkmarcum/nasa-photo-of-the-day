import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image";
// import ButtonAnimated from "./Button";
import { Button } from "./Button";
import { Container, Icon, Divider } from "semantic-ui-react";

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
      {/* <button onClick={() => setRefresh(refresh + 1)}>NEW IMAGE</button> */}
      {/* <ButtonAnimated onClick={() => setRefresh(refresh + 1)} /> */}
      <Button onClick={() => setRefresh(refresh + 1)}>
        <Icon color="white" name="sync" />
        NEW IMAGE
      </Button>

      <a href={photo.hdurl}>
        <Image imgUrl={photo.url} hdUrl={photo.hdurl} />
      </a>

      <p className="hd-click">
        <Icon name="external alternate" />
        Click image to view in HD
      </p>

      <h2>{photo.title}</h2>
      <h3>Date: {photo.date}</h3>
      <Container textAlign="justified">
        <Divider horizontal>
          <Icon color="white" name="double angle down" />
        </Divider>

        <p className="explanation">{photo.explanation}</p>
      </Container>
    </div>
  );
}

export default Body;
