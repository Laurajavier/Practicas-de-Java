let aA= prompt("1er numero"); 
let bB= prompt("2do numero");  
if(bB!=0)
{ 
   
document.writeln(aA + "  positivo");

}
else if (aA < 0)
{
    document.writeln(" negativo");
}
if  (bB> 0)
{
    document.writeln(bB +" positivo");
}
else if (bB <0 )
{
    document.writeln(bB +"  negativo")
}
if(aA>0 && bB>0)
{
  document.writeln("ambos son positivos");
}
else if(aA >0 && bB<0)
{
    document.writeln("uno de los dos es positivo");
}

else if(aA<0 && bB<0)
{
  document.writeln("ambos son negativos");
}