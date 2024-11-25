// let score = 0;
// let finalScore = score || 100;
// console.log(finalScore);

//=======================
let score = 0;
let finalScore = score ?? 100;
console.log(finalScore);

//=======================
function greet(name) {
  let userName = name ?? "Anonymous";
  console.log(`Hello, ${userName}!`);
}

greet("Alice");
greet(null);
greet(undefined);

//=======================
let a = null;
let b = undefined;
let c = "Valid value";

let result = a ?? b ?? c ?? "Default";
console.log(result);

//=======================
let port = process.env.PORT ?? 3000;
console.log(`Server running on port ${port}`);

//=======================
function createUser(name, age, role = null) {
  let userRole = role ?? "Viewer";
  console.log(`User: ${name}, Age: ${age}, Role: ${userRole}`);
}

createUser("Alice", 25);
createUser("Bob", 30, "Admin");
createUser("Charlie", 22, undefined);

//=======================
let items = [null, undefined, "Item 3", "Item 4"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i] ?? "Default Item"); 
}

//=======================
let name = null;
let nickname = undefined;
let username = "user123";

let displayName = name ?? nickname ?? username ?? "Anonymous";
console.log(displayName); 


