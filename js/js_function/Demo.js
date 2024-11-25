// let sum = function (a, b) {
//   return a + b;
// };
// let Sub = function (a, b) {
//   return a - b;
// };

// let mul = function (a, b) {
//      return a * b;
// }

// let Cal = function (result) {
//   console.log(result(5, 3));
//   console.log(result(10, 5));
// };
// Cal(mul);

// ((a, b) => {
//   console.log(a + b);
// })(100, 200);

// console.log(sum(100, 399));

// (() => {
//   console.log("Hello, World!");
// })();

// for (let i = 0; i < 3; i++) {
//      setTimeout(() => console.log(i), 1000);
//    }
   

// // for (var i = 0; i < 3; i++) {
// //   setTimeout(() => console.log(i), 1000);
// // }

// for (let i = 0; i < 3; i++) {
//   (function (index) {
//     setTimeout(() => console.log(index), 1000);
//   })(i);
// }

//===================================

const a = function () {
  console.log("I am from function expression - a");
};

function b(receiver) {
  console.log("Hey I am from function - b",receiver);
  receiver();
}
// b(100);
b(a)
console.log("===========================");

b(function(){
  console.log("I am from anonymous function - b");
})