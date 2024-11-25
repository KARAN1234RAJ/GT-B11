let marks = 85;
let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : "C";
console.log(grade);

//========================
let score = 75;
let result = score >= 90 ? "Excellent" : score >= 60 ? "Good" : "Fail";
console.log(result);

//========================
function getMessage(isAdmin) {
  return isAdmin ? "Welcome, Admin!" : "Welcome, User!";
}
console.log(getMessage(true));
console.log(getMessage(false));

//========================
let isActive = true;
let buttonStyle = {
  backgroundColor: isActive ? "green" : "gray",
};
console.log(buttonStyle); 

//========================
let userRole = "admin";
let accessLevel = userRole === "admin" ? "Full Access" : "Limited Access";
console.log(accessLevel); 

//========================



