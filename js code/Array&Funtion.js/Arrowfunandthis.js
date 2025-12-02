// Arrow function and this 
function testScope() 
{
 let localVar = "I am local!";
 console.log(localVar);
}
testScope(); // Logs: "I am local!"
console.log(localVar); // Error: localVar is not defined