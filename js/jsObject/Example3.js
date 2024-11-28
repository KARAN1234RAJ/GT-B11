let obj = {
     name: "Karan",
     age: 25,
     city: "Indore",
     game: ["Cricket", "football", "Ludo"],
     address: {
       street: "Mahatma Gandhi Road",
       city: "Indore",
       state: "Madhya Pradesh",
       country: "India",
     },
   };

   let properties = Object.getOwnPropertyNames(obj)
   console.log(properties)
   for(let property of properties) {
     console.log(obj[property])
   }
   
   console.log(Object.entries(obj));

   const numbers = [10, 20, 30];

console.log(Object.values(numbers));

