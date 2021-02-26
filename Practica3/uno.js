let a= prompt("1er numero"); parseInt(a);
let b= prompt("2do numero");  parseInt(b); 

if(b!=0)
{ 
    c=a/b;
document.writeln("El resultado de la division es " + c);

}
else if (b==0)
{
    document.writeln("No se puede dividir entre 0");
}

