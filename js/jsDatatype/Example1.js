// console.log(isNaN(NaN)); // t
// console.log(isNaN("hello")); //t
// console.log(isNaN("123")); //f
// console.log(isNaN("123abc"));//t

// console.log(isNaN(123));  //f   
// console.log(isNaN(0));  //f     
// console.log(isNaN(3.14)); //f   
// console.log(isNaN(("10" - 2))); //f

// console.log(isNaN(true));   //f
// console.log(isNaN(false));  //f
// console.log(isNaN(null));   //f

// console.log(isNaN("true"));  //t
// console.log(isNaN("false")); //t
// console.log(isNaN("null"));  //t

// console.log(isNaN(undefined)); //f

// console.log(isNaN("123abc"));  //t     
// console.log(Number.isNaN("123abc")); //t
// console.log(isNaN({}));  //t        
// console.log(isNaN({ value: 5 }));//t

// console.log(isNaN([10]));   //f  //t
// console.log(isNaN([1, 2]));  //f //t
// console.log(isNaN([]));  //f   //t 

// console.log(isNaN(""));  //f    
// console.log(isNaN("   ")); //f   

// console.log(isNaN(Infinity)); //f   
// console.log(isNaN(-Infinity));   //f
// console.log(isNaN(true));//f
// console.log(isNaN("hell0"));//f
// console.log(isNaN(false));//f




const value = "abc";

if (isNaN(value)) {
  console.log("The value is not a number");
} else {
  console.log("The value is a number");
}











