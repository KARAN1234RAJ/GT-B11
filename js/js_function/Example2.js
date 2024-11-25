const a = function () {
  console.log("I am from function expression - a");
};

function b(a) {
  console.log("Hey I am from function - b");
  a();
}
b(a);

//===============
function myFunc(a, b) {
  console.log("The values are :");
  console.log("a = ", a);
  console.log("b = ", b);
}
myFunc();

//===================
function add(a = 0, b = 0) {
  return a + b;
}

console.log(add(10, 5));
console.log(add(10));
console.log(add());

//===================
function myFunc(a, b, ...extraArgs) {
  console.log("a = ", a);
  console.log("b = ", b);
  console.log("Extra Arguments = ", extraArgs);
}
myFunc(1, 2, 3, 4, 5);

//===================
function func1() {
  console.log(arguments[0]);
  arguments[1] = "I am new value";
  console.log("In function func1, y = ", arguments[1]);
}
x = "Hello Guys!";
y = "I am old value";
func1(x, y);
console.log("In global, y = ", y);

//===================
function myFunc(a) {
  console.log(a);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

myFunc("One", "Two");
//======================
let val = 10;
function demo(b) {
  let c = b;
  console.log("I'm from demo(), val = ", c);
}
demo(val);
console.log("I'm from global scope, val = ", val, c);
