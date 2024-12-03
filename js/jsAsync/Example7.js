const api = "https://jsonplaceholder.org/users";

// console.log(fetch(api));

// fetch(api).then((data)=>{
//      console.log(data);

// })

// console.log(fetch(api).then((data) => data.json()));

fetch(api)
  .then((data) =>
    data.json().then((result) => {
      console.log(result);
    })
  )
  .catch((err) => console.error("Wrong Api"));
