let obj = {
  name: "Karan",
  age: 25,
  city: "Indore",
  game: ["Cricket", "football", "Ludo"],
  address: {
    street: "Mahatma Gandhi Road",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
  },
};
console.log(typeof obj);

const objCon = new Object();

console.log(objCon);
objCon.name = "Vostro 14 3000";
objCon.brand = "Dell";
objCon.price ="500000";

console.log(objCon);
let obj2 = Object.assign({}, objCon,obj)

console.log(obj2);

