function Person(name, age) {
  this.name = name;
  this.age = age;
//   return this;
}
// console.log(Person(), "===========");

// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// console.log(person1);

// console.log(person2);

const user = new Person("Bob", 25);

console.log(user);
