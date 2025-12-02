// Accessing and Modifying Properties
let student = {
    name: "Emma",
    grade: "A"
   };
   console.log(student.name); // "Emma"
   console.log(student["grade"]); // "A"

   // Add new property
   student.age = 20;
   console.log(student.age); // 20

   // Update property
   student.grade = "A+";
   console.log(student.grade); // "A+"

   // Delete property
   delete student.age;
   console.log(student.age); // undefined 
   
   
   
   //Operator
   "name"in student ; //true

   //has OwnProperty Method
   student.hasOwnProperty("grade"); //true

   //Iterating Over Properties
   for(let key in student) {
    console.log(key+":"+student[key]);
   }
   console.log(Object.keys(student)); //["name","grade"]
   console.log(Object.values(student)); //["Emma","A+"]
   console.log(Object.entries(student)); //[["name","Emma"],["grade","A+"]]

   //Prototypes
   let obj = {a:1};
   console.log(obj.toString()); //Mehtod inherited from a Object.prototype 