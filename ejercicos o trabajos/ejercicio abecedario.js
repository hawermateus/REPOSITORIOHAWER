/*abecedario*/

function contar_consonantes(vocales) {
    let conso="bcdfghjklmnñpqrstvwxyz";
    let count = 0;
    
    for (let letra of vocales ) {
        if (conso.includes(letra.toLowerCase())) {
            count++;
        }
    }
    return count
}

const cadena = ('carro')
const result = contar_consonantes(cadena);
console.log(result);