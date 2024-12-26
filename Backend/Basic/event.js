const EventEmitter = require("events");

// events
// login Scenario
const Login = new EventEmitter();
// console.log("inside Event Modules");
const StartLoginHandler1 = (userName, fileName) => {
  console.log("Start Login Handler 1");
  console.log("User Name: " + userName);
  console.log("File Name: " + fileName);
};
const StartLoginHandler2 = () => {
  console.log("Start Login Handler 2");
};
// event name ==>> start_login
Login.addListener("start_login", StartLoginHandler1);
Login.addListener("start_login", StartLoginHandler2);

// Event Triggers

// Login.emit("start_login","Karan","file-1");
// Login.emit("start_login","Mohit","file-2");

// Validate User EventName validate_user
const ValidateUserHandler = () => {
  console.log("Validate User Handler");
};

Login.addListener("validate_user", ValidateUserHandler);

// Login.emit("validate_user");

const handler1 = () => {
  console.log("Handler 1");
};
const handler2 = () => {
  console.log("Handler 2");
};
const handler3 = () => {
  console.log("Handler 3");
};
const handler4 = () => {
  console.log("Handler 4");
};
const handler5 = () => {
  console.log("Handler 5");
};

// Adding Event Listener

Login.on("login", handler1);
Login.on("login", handler2);
Login.on("login", handler3);
Login.once("login", handler4);
Login.on("login", handler5);

// Triggering Event
Login.emit("login");
// Removing Event Listener
//  Login.removeListener("login", handler1);
//  Login.off("login", handler2);
Login.removeAllListeners("login");
Login.emit("login");

/*
create Instance of  EventEmitter 
Event Handler function
addListener , on // add event 

removeListener, off // remove event listener

removeAllListeners // remove all event listener
emit // trigger event

once // add event listener that will be triggered only once
*/
