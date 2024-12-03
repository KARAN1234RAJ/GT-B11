const api = "https://fakestoreapi.com/products";

// fetch(api)
//   .then((response) =>
//     response
//       .json()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//       })
//   )
//   .catch((err) => {
//     console.log("Error:", err);
//   });

async function getData() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}
getData();
