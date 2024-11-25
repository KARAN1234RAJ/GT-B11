// function demo() {
//   let a = 10;

//   function anotherDemo() {
//     let b = 20;
//     console.log("Hey, I am from anotherDemo! a = ", a);
//     console.log("Hey, I am from anotherDemo! b = ", b);
//   }
//   anotherDemo();
//   console.log("Hey, I am from anotherDemo! a = ", a);
//   console.log("Hey, I am from anotherDemo! b = ", b);
// }
// demo();

//==========
// function demo() {
//   let a = 10;
//   anotherDemo();
//   function anotherDemo() {
//     let b = 20;
//   }
//   console.log("Hey, I am from demo! b = ", b);
// }
// demo();

//=========
let fact = function factorial(f) {
  if (f <= 1) return 1;
  else return f * factorial(f - 1);
};
console.log("The factorial of 5 = ", fact(5));

//=========
function outermost(a) {
  function outer(b) {
    function inner(c) {
      console.log("outermost function: a = ", a);
      console.log("outer function: b = ", b);
      console.log("inner function: c = ", c);
    }
    inner(3);
  }
  outer(2);
}
outermost(1);
