function contar_vocales(vocales) {
    let conso="aeiou"
    let count = 0;

    for (let letra of vocales ) {
        if (conso.includes(letra.toLowerCase())) {
            count++;
        }
    }
    return count
}
const cadena = ('luna')
console.log(cadena)
const result = contar_vocales(cadena);
console.log('la cadena de texto tiene',result, 'vocales');

function contar_consonantes(consonantes) {
    let conso="bcdfghjklmnñpqrstvxyz"
    let count = 0;

    for (let letra of consonantes ) {
        if (conso.includes(letra.toLowerCase())) {
            count++;
        }
    }
    return count
}
const cadena1 = ('celular')
console.log(cadena1)
const result1 = contar_consonantes(cadena1);
console.log('la cadena de texto tiene',result1, 'consonantes');