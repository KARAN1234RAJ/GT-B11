const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.PORT);
const app = express();
app.use(express.json());

const Products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    stock: 150,
    brand: "LogiTech",
    rating: 4.5,
    color: "Black",
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 49.99,
    category: "Electronics",
    stock: 85,
    brand: "Sony",
    rating: 4.7,
    color: "Blue",
  },
  {
    id: 3,
    name: "Desk Lamp",
    price: 19.99,
    category: "Home",
    stock: 200,
    brand: "Ikea",
    rating: 4.2,
    color: "White",
  },
  {
    id: 4,
    name: "Notebook",
    price: 3.99,
    category: "Stationery",
    stock: 300,
    brand: "Moleskine",
    rating: 4.6,
    color: "Red",
  },
  {
    id: 5,
    name: "Water Bottle",
    price: 14.99,
    category: "Accessories",
    stock: 120,
    brand: "Hydro Flask",
    rating: 4.8,
    color: "Blue",
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 29.99,
    category: "Fitness",
    stock: 60,
    brand: "Liforme",
    rating: 4.9,
    color: "Purple",
  },
  {
    id: 7,
    name: "Smartphone Stand",
    price: 12.99,
    category: "Accessories",
    stock: 110,
    brand: "Anker",
    rating: 4.3,
    color: "Silver",
  },
  {
    id: 8,
    name: "Gaming Keyboard",
    price: 69.99,
    category: "Electronics",
    stock: 45,
    brand: "Razer",
    rating: 4.7,
    color: "RGB",
  },
  {
    id: 9,
    name: "Travel Backpack",
    price: 39.99,
    category: "Luggage",
    stock: 90,
    brand: "Samsonite",
    rating: 4.4,
    color: "Black",
  },
  {
    id: 10,
    name: "Portable Charger",
    price: 29.99,
    category: "Electronics",
    stock: 75,
    brand: "Belkin",
    rating: 4.6,
    color: "White",
  },
  {
    id: 11,
    name: "Electric Kettle",
    price: 34.99,
    category: "Home Appliances",
    stock: 80,
    brand: "Hamilton Beach",
    rating: 4.3,
    color: "Silver",
  },
  {
    id: 12,
    name: "Running Shoes",
    price: 89.99,
    category: "Sports",
    stock: 50,
    brand: "Nike",
    rating: 4.8,
    color: "Black",
  },
  {
    id: 13,
    name: "Wireless Charger",
    price: 22.99,
    category: "Electronics",
    stock: 95,
    brand: "Samsung",
    rating: 4.5,
    color: "White",
  },
  {
    id: 14,
    name: "Office Chair",
    price: 129.99,
    category: "Furniture",
    stock: 30,
    brand: "Herman Miller",
    rating: 4.9,
    color: "Gray",
  },
  {
    id: 15,
    name: "Digital Watch",
    price: 59.99,
    category: "Accessories",
    stock: 70,
    brand: "Casio",
    rating: 4.6,
    color: "Black",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.get("/products", (req, res) => {
//   res.json({
//     length: Products.length,
//     products: Products,
//   });
// });
// filter by category

// app.get("/products/:category", (req, res) => {
//   const category = req.params.category;
//   console.log("category:", category);
//   const filteredProducts = Products.filter(
//     (product) => product.category === category
//   );
//   res.send({
//     length: filteredProducts.length,
//     products: filteredProducts,
//   });
// }); //
// Product by price and rating using query parameters
app.get("/products", (req, res) => {
  const { price, rating } = req.query;
  console.log("price:", price);
  console.log("rating:", rating);
  const filteredProducts = Products.filter(
    (product) =>
      product.price <= parseFloat(price) && product.rating >= parseFloat(rating)
  );
  if (filteredProducts.length) {
    res.json({
      length: filteredProducts.length,
      products: filteredProducts,
    });
  } else {
    res.status(404).send("No products found matching the given criteria");
  }
});
// add data
app.post("/product/new", (req, res) => {
  // create a new product
  // need data from request
  // push the new product
  console.log(req.body);

  Products.push(req.body);
  res.json({
    length: Products.length,
    products: Products,
  });

  //   res.send("Product added successfully");
});
// update data
app.put("/product/update/:productId", (req, res) => {
  // need is to search product --> params
  const { productId } = req.params;
  // console.log(productId);
  //need complete data to update --> req.body
  const updatedProduct = req.body;
  // console.log(updatedProduct);

  const index = Products.findIndex(
    (product) => product.id === parseInt(productId)
  );
  console.log(index);
  if (index !== -1) {
    Products[index] = updatedProduct;
  } else {
    return res.status(404).send("Product not found");
  }

  res.send({
    message: "Product updated successfully",
    length: Products.length,
    products: Products,
  });
});

// delete data
app.delete("/product/delete/:productId", (req, res) => {
  // need is to search product --> params
  const { productId } = req.params;
  console.log(productId);

  // delete the element
  const index = Products.findIndex(
    (product) => product.id === parseInt(productId)
  );
  console.log(index);
  if (index !== -1) {
    Products.splice(index, 1);
  } else {
    return res.status(404).send("Product not found");
  }

  res.send({
    message: "Product deleted successfully",
    length: Products.length,
    products: Products,
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
