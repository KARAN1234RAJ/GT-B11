const students = [
  { id: 1, name: "John", subjects: { math: 70, english: 80, science: 60 } },
  { id: 2, name: "Jane", subjects: { math: 40, english: 90, science: 50 } },
  { id: 3, name: "Alice", subjects: { math: 85, english: 88, science: 92 } },
  { id: 4, name: "Bob", subjects: { math: 65, english: 70, science: 55 } },
];
//Filter students who passed all subjects (minimum 50 marks) and calculate their total marks.

const result = students
  .filter((student) => {
    return Object.values(student.subjects).every((mark) => mark >= 50);
  })
  .map((student) => {
    return {
      name: student.name,
      totalMarks: Object.values(student.subjects).reduce(
        (sum, mark) => sum + mark,
        0
      ),
    };
  });

console.log(result);
