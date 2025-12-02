//A symbol is a unique and primitive value.  This data type was introduced in ES6.
//two symbol with the same description
let val1=Symbol("programiz");
let val2=Symbol("programiz");

console.log(val1===val2); //false 