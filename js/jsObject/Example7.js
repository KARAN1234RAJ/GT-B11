const data = [
  {
    id: 1,
    name: "John",
    age: 28,
    hobbies: ["reading", "hiking", "coding"],
    scores: { math: 90, english: 85, science: 78 },
  },
  {
    id: 2,
    name: "Jane",
    age: 22,
    hobbies: ["painting", "cycling"],
    scores: { math: 72, english: 95, science: 88 },
  },
  {
    id: 3,
    name: "Alice",
    age: 30,
    hobbies: ["writing", "running", "coding"],
    scores: { math: 80, english: 78, science: 92 },
  },
  {
    id: 4,
    name: "Bob",
    age: 25,
    hobbies: ["gaming", "hiking", "reading"],
    scores: { math: 85, english: 82, science: 85 },
  },
];

//users who have "coding" as a hobby and a math score above 80.
//Map these filtered users to extract their names and average scores.

const result = data
  .filter((user) => user.hobbies.includes("coding") && user.scores.math >= 80)
  .map((user) => {
    const averageScore =
      Object.values(user.scores).reduce((a, b) => a + b, 0) /
      Object.keys(user.scores).length;
      return { name: user.name, averageScore : averageScore,age: user.age};
  });
console.log(result);
