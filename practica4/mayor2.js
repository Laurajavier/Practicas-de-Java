function mayor (newt,thomas,dylan){
    newt= parseInt(prompt ("priemer numero"));
    thomas= parseInt(prompt ("segundo numero"));
    dylan= parseInt(prompt ("tercer numero"));
    
    u=Math.max(newt,thomas,dylan);
    return u;


}
mayor();
document.writeln("El mayor es: " + u)
