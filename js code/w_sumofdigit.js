var n, remainder,sum=0;
n= parseInt(prompt("Enter number"));
while(n)
{
    remainder= n%10;
    sum = sum+remainder;
    n = Math.floor(n/10);
}
console.log(sum);