import React from "react";
import Child1 from "./Child1";
import "./parent.css";

const Parent = () => {
  return (
    <div className="maiDiv">
      <h1>Parent Component</h1>
      <Child1>
        <p>This is a paragraph from Parent to child</p>
        <h4>Name: Karan</h4>
        location:Gaya
      </Child1>
    </div>
  );
};

export default Parent;
