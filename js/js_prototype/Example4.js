let subject = {
  topic: "javascript",
  about: function () {
    console.log("JS is amazing");
  },
};
let course = {
  __proto__: subject,
  instructor: "professor",
};
let department = {
  __proto__: course,
  dept_name: "IT",
};
let student = {
  __proto__: department,
  id: 1,
};
console.log(student.__proto__.__proto__.__proto__.__proto__);