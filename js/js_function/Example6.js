function parent(x) {
      function child(y) {
       return x + y;
     }
     return child;
   }
    fn_child = parent(10); 
   result = fn_child(5); 
   console.log(result);
   
   
   result1 = parent(10)(5);
   console.log(result1);
   