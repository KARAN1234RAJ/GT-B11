import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardText, CardBody, CardSubtitle } from "reactstrap";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  // Fetch data from API
  const getData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data.total);
      });
  };
  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, []);
  console.log(products);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: "10px",
        margin: "20px",
      }}
    >
      {
        products.map((product) => (
          <div key={product.id}>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">{product.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {product.category}, {product.brand}
                </CardSubtitle>
              </CardBody>
              <img alt="Card cap" src={product.images[0]} width="100%" />
              <CardBody>
                <CardText>{product.description}</CardText>
              </CardBody>
            </Card>
          </div>
        ))

        // Show loading message if data is not fetched yet
      }
    </div>
  );
};

export default Products;
