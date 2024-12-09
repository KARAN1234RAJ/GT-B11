// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(
//   <div>
//     <h1>Hello React Js</h1>
//     <p>This is a simple React app</p>
//   </div>,
//   document.getElementById("root")
// );
//====================================
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
