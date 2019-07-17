import React from "react";

function Image({ imgUrl }) {
  return (
    <div className="nasa-img">
      <img src={imgUrl} alt="space" />
    </div>
  );
}

export default Image;
