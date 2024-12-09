import React, { useState } from "react";

const Aboutme = (props) => {
  const [text, setText] = useState(props.text);
  const updateText = () => {
    setText("Welcome to my About Page");
  };
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={updateText}>update text</button>
    </div>
  );
};
const AboutNishi = () => {
  return (
    <div>
      <h1>"Welcome to About Page of Nishi"</h1>
    </div>
  );
};

export {Aboutme,AboutNishi};
