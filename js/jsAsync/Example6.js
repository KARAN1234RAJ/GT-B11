const myPromise = new Promise((resolve, reject) => {
  Name = "";

  if (Name) {
    resolve("Name is valid");
  } else {
    reject("Name is invalid");
  }
});
// console.log(myPromise);
myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
