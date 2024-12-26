const express = require("express");
// new Application
const app = express();

// Data
const products = [
  { id: "101", name: "Shirt", category: "Clothing", price: 2000 },
  { id: "102", name: "saree", category: "Clothing", price: 4000 },
  { id: "103", name: "watch", category: "accessories", price: 3000 },
];
app.get("/", (req, res) => {
  res.send("Hello World ");
  console.log(req.url);
});
app.get("/home", (req, res) => {
  res.send("Welcome to Home Page");
  console.log(req.url);
});

// About Page

app.get("/about", (req, res) => {
  res.send("This is About Page");
  console.log(req.url);
});
// Product Page

app.get("/products", (req, res) => {
  res.send(products);
  console.log(req.url);
});

// post request
app.post("/products", (req, res) => {
  res.send(" products created successfully");
});

// put request
app.put("/products/:id", (req, res) => {
  const product = ["products"];
  if (product) {
    res.send("Product updated successfully");
  } else {
    res.status(404).send("Product not found");
  }
});
// delete request
app.delete("/products/:id", (req, res) => {
  const product = ["products"];
  if (product) {
    res.send("Product deleted successfully");
  } else {
    res.status(404).send("Product not found");
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
