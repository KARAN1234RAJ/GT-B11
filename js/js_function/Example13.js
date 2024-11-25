// Anonymous  function
// function (){
//      console.log("It will not run :p ");
//  }

let demo = function () {
  console.log("Example of anonymous functions");
};
demo();

//==========
let area = function (length, breadth) {
  return length * breadth;
};
let x = area(10, 5);
console.log("Area of the rectangle is = ", x);
//======
let x1 = function (a, b) {
  return a + b;
};
let sum = x1(5, 10);
console.log("Sum of two numbers is = ", sum);
//======
function num() {
  return 100;
}

let y = num();

console.log("Value of y is = ", y);
//=================
function greet(wish) {
  console.log(wish(), "everyone!");
}
greet(function () {
  return "Good Morning";
});
///=========
setTimeout(function () {
  console.log("I will run after 5 seconds!");
}, 5000);
