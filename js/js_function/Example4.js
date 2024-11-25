function outer(){
     function inner(){
    }
    return inner;
   }
   let demo = outer();
   demo();

   
   //==================

   function intro() {
     introduce = 'Hello';
     return function () {
         console.log(introduce + ' World!');
     }
 }
 
 intro()(); 
 