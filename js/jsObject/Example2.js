function User(fName, lName, age, job) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
  this.job = job;
  this.fullName = this.fName + " " + this.lName;
  this.getnameJob = () => `${this.fName}  ${this.job}`;
}

console.log(User);

const user1 = new User("Ridhima", "Pradhan", "22", "Developer");
const user2 = new User("Priya", "Sahu", "20", "Developer");

console.log(user1.getnameJob());
console.log(user2.fullName);
