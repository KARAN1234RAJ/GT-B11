setTimeout(() => {
  console.log("I am from setTimeout1");
}, 2000);

setTimeout(function CallbackHere() {
  console.log("I am from setTimeout2");
}, 2000);
