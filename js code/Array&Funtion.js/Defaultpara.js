// Default Parameter
function greet(name="Guest")
{
    return `Welcome,${name}!`;
}
console.log(greet()); //Welcome,Guest!
console.log(greet("John")); //Welcome,John!