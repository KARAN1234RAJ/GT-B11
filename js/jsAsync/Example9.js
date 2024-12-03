const api = "https://fakestoreapi.com/products";
async function getProduct() {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
  return data;
}
getProduct();
