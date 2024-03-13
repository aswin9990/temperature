var a = window.prompt("enter temprature is c or f ");
var c=0;
var f=0;
if(a=='f')
{
    var b =window.prompt("enter a value");
    f=(b-32)*0.56;
    document.write("fahrenheit to celsius of "+b+" is "+f)
}
else if (a=='c')
{
    var b =window.prompt("enter a value");
    c=(b*1.8)+32;
    document.write("celsius to fahrenheit of "+a+" is "+c)
}
else
{
 document.write("invalid");
}