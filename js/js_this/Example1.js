// var a = "GrowTech";

// console.log(a);
// console.log(window);

// console.log(this)

//variable declared in a global scope
// var name = "James";

// function Employee() {
//   var name = "Jack";
//   console.log("name: " + name);
//   //this here refers to the global object
//   console.log("this.name = " + this.name);
// }

// Employee();
// window.Employee();

//===========
// var a = 10;
// function x() {
//   console.log(this);
// }
// function y() {
//   console.log(this.a);
// }

// x();
// y();

//===========

function getValue() { 
     console.log(this.value); 
   }
   
   const Obj = {
     value: 20,
     getValue: getValue
   }
   
   Obj.getValue() 
 console.log(this.getValue);
   
   
   
   