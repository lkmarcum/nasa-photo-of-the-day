import React from "react";

function Image({ imgUrl, hdUrl }) {
  return (
    <div className="nasa-img">
      <img src={imgUrl} alt="space" />
    </div>
  );
}

export default Image;
