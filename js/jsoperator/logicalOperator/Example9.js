let x = 2, y = 3;
let result = x++ * --y;  
console.log(result);    
console.log(x, y); 

//============
let a = 1;
let b = 2;
let result2 = ++a + b++ + --b;
console.log(result2); 
console.log(a, b);   

//============
let i = 5;
let total = ++i + i++ + --i + i--;
console.log(total); 
console.log(i);    

