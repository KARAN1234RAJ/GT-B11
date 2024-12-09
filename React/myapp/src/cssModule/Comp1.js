import React from "react";
import Styles from "./comp1.module.css";
const Comp1 = () => {
  return (
    <div>
      <h1 className={Styles.heading}>Component 1</h1>
      <p className={Styles.para}>This is Component 1</p>
      <button>Click Me</button>
    </div>
  );
};

export default Comp1;
