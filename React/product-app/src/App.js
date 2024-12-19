import { useState, useEffect } from "react";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Contact from "./router/Contact";
import Product from "./router/Product";
import NavBar from "./router/NavBar";
import Users from "./router/Users";
import User from "./router/User";

const App = () => {
  return (
    <>
      {/* <Products /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </>
  );
};
export default App;
