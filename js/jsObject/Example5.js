const users = [
  { id: 1, name: "Aarav Sharma", email: "aarav@example.com", age: 28 },
  { id: 2, name: "Priya Patel", email: "priya@example.com", age: 24 },
  { id: 3, name: "Rahul Gupta", email: "rahul@example.com", age: 31 },
  { id: 4, name: "Ananya Iyer", email: "ananya@example.com", age: 27 },
  { id: 5, name: "Rohan Verma", email: "rohan@example.com", age: 29 },
  { id: 6, name: "Kavya Desai", email: "kavya@example.com", age: 26 },
  { id: 7, name: "Vikram Singh", email: "vikram@example.com", age: 34 },
  { id: 8, name: "Ishita Mehta", email: "ishita@example.com", age: 23 },
  { id: 9, name: "Aditya Nair", email: "aditya@example.com", age: 30 },
  { id: 10, name: "Sneha Chatterjee", email: "sneha@example.com", age: 25 },
  { id: 11, name: "Aditya Nair", email: "adityanair@example.com", age: 35 },
];

// console.log(users.map((user) =>` name: ${user.name} and age: ${user.age}`));

let result = users
  .map((user) => user)
  .filter((user) => user.name === "Aditya Nair");
// console.log(result[0].email);
console.log(result);
console.log(result.map((user) =>user.email));

console.log(users.map((user) =>user).filter((user) => user.age ===26)[0].name);

// 
