import { useState, useEffect } from "react";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Contact from "./router/Contact";
import Product from "./router/Product";
import { Nav, NavLink } from "reactstrap";
const App = () => {
  return (
    <>
    
      {/* <Products /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};
export default App;
