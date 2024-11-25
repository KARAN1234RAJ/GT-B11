let originalObj = {
  name: "GrowTech Indore",
  rating: 4.5,
  topic: "JavaScript",
};

function demo(tmpObj) {
  tmpObj.rating = 5;
  console.log(tmpObj.rating);
}

console.log(originalObj.rating);
demo(originalObj);
console.log(originalObj.rating);

//========================

let originalArr = ["Grow", "Tech", "is", "the"];

function pushArray(tmpArr) {
  tmpArr.push("best");
  console.log(tmpArr);
}

console.log(originalArr);
pushArray(originalArr);
console.log(originalArr);
