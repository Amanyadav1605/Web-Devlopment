let m1=90,m2=70,m3=85,per;
per=(m1+m2+m3)/3;
if(per>=95)
{
    console.log("HONOURS");
}
else if(per>=60)
{
    console.log("FIRST");
}       
else if(per>=50)
{
    console.log("SECOND");
}
else if(per>=40)
{
    console.log("THIRD");
}
else
{
    console.log("FAILED");
}