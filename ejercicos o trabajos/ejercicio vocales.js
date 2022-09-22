  //*ejercicio*/
  /*escriba una funcion y una cadena de texto que digacuantas vocales tiene consonantes  y cuantas no son 
vocalesniconsonantes*/
 
function contar_vocales(vocales) {
    let conso="aeiou";
    let count = 0;
    
    for (let letra of vocales ) {
        if (conso.includes(letra.toLowerCase())) {
            count++;
        }
    }
 return count
}

const cadena = ('computador')
const result = contar_vocales(cadena);
console.log(result);
