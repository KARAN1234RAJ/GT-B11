const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
    available: true,
    categories: ["electronics", "computers"],
  },
  {
    id: 2,
    name: "Phone",
    price: 500,
    available: false,
    categories: ["electronics", "mobile"],
  },
  {
    id: 3,
    name: "Tablet",
    price: 800,
    available: true,
    categories: ["electronics", "computers"],
  },
  {
    id: 4,
    name: "Headphones",
    price: 200,
    available: true,
    categories: ["accessories", "audio"],
  },
];

//Filter products that are available and belong to the "electronics" category, then map them with a 10% discount.
const discounts = products.filter(product => product.available == true && product.categories.includes("electronics")).map(product => {return{...product ,discount:10}});
console.log(discounts);
