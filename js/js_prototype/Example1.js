// let name = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// console.log(name);
let parentCompany = {
  name: "Reliance Corporation",
  ceo: "Mukesh Ambani",
  industry: "Energy and Finance",
};

let company = {
  name: "A",
  pay: function () {
    console.log("Paying");
  },
}; //company object

company.__proto__ = parentCompany;
let worker = {
  id: 1,
  work: function () {
    console.log("Working");
  },
}; //worker object
worker.name = "Karan Raj";
worker.__proto__ = company;
//worker object inherits company object
console.log(worker.name);
console.log(company.ceo);
console.log(company.id);

// // calling method from company object using worker object.
