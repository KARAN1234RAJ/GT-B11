let a = NaN;
let b = 10;

console.log(a === b);
console.log(a !== b);

//================

null === null;
undefined === undefined;
null === undefined;
//=================

let car1 = {
  name: "Audi",
};

let car2 = {
  name: "Audi",
};

console.log(car1 === car1);

console.log(car1 === car2);

console.log(car1 !== car1);

console.log(car1 !== car2);
