let AA= prompt("1er numero"); 
let BB= prompt("2do numero");  
let CC= prompt("3er numero"); 
if((AA==BB) && (BB == CC))
{ 
   
document.writeln(" Los resultados son iguales");

}
else if (AA > BB && AA > CC)
{
    document.writeln(AA + "Este mayor");
}
else if  (BB > AA && BB > CC)
{
    document.writeln(BB + " Este es mayor");
}
else if (CC > BB && CC > AA)
{
    document.writeln(CC + " Este es mayor");
}