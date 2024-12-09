import React from "react";
import Comp3 from "./Comp3";
// import './comp2.css';
import Styles from "./comp2.module.css";

const Comp2 = () => {
  return (
    <div>
      <h1 className={Styles.heading}>Component 2</h1>
      <p className={Styles.para}>This is a component 2</p>
      <button>Click me</button>
      <Comp3 />
    </div>
  );
};

export default Comp2;
