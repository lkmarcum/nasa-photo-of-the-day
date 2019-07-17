import React from "react";

function Image({ imgUrl }) {
  return (
    <div className="nasa-img">
      <img src={imgUrl} style={{ maxWidth: "1600px" }} />
    </div>
  );
}

export default Image;
