const number = parseInt(prompt('Enter the number of term:'));
let a=0,b=1,c;
console.log('Fibonacci Series:');
for(let i=1;i<=number;i++) {
console.log(a);
 c=a+b;
 a=b;
 b=c;
}
