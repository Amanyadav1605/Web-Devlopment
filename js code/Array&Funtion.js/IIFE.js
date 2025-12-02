// Immediately Invoked Function Expression 
function isEven(number) {
    if (number % 2 === 0) {
    return `${number} is even.`;
    } else {
    return `${number} is odd.`;
    }
   }
   console.log(isEven(4)); // "4 is even."
   console.log(isEven(7)); // "7 is odd."
   