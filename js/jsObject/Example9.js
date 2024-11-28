const pilots = [
     {
       id: 2,
       name: "Wedge Antilles",
       faction: "Rebels",
     },
     {
       id: 8,
       name: "Ciena Ree",
       faction: "Empire",
     },
     {
       id: 40,
       name: "Iden Versio",
       faction: "Empire",
     },
     {
       id: 66,
       name: "Thane Kyrell",
       faction: "Rebels",
     },
   ];
   
   const result = pilots.filter((pilot)=>{
     return pilot.faction === "Empire";

   }).map((user)=>{
     // return { Id: user.id ,Name: user.name};
     return user.id; 
   });
   console.log(result);