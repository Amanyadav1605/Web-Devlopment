let num1=Number(prompt("Enter no1"));
let num2=Number(prompt("Enter no2"));
let op=prompt("Enter operator");
switch (op)
{
    case'+':
    console.log("Addition is",(num1+num2));
    break;
    case'-':
    console.log("Subtractionis",(num1-num2));
    break;
    case'*':
    console.log("Multipication is",(num1*num2));
    break;
    case'/':
    console.log("Division is",(num1/num2));
    break;
    default:
    console.log("Invalid op");
}