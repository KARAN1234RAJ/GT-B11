import React, { useState } from "react";

const ScroleImage = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };
  return (
    <div>
      <p>width:</p>
      <input type="range" min="100" max="500" onChange={handleWidthChange} />
      <p>height:</p>
      <input type="range" min="100" max="500" onChange={handleHeightChange} />
      <br />
      <img
        src="https://imgs.search.brave.com/W64yxLRmgzXZfj5nx1AowOn1EpNN38qAmHvX0Cvv-G8/rs:fit:860:0:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA4L0FQSi1BYmR1/bC1LYWxhbS5qcGc"
        alt="Image"
        width={width}
        height={height}
      />
      <div>
        <p>
          {" "}
          Width: {width}px, Height: {height}px
        </p>
      </div>
    </div>
  );
};

export default ScroleImage;
