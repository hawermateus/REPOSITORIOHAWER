//funcion flecha sin parametro
const saludar2=()=>`hola soacha querida`;
console.log(saludar2());

//funcion flecha con parametros
const saludar3=()=>`hola ${nombre} bienvenido a soacha querido`;
console.log(saludar3(`gustavo petro`));

constmifuncion=(c1,c2)=>Math.sqrt(Math.pow(c1,2)+(c2,2));
console.log(mifuncion(7,9))

//ciclos//
//piramide//
const pyramid = (numpisos)=>{ for (let i = 0; i < numpisos; i++){let piso = ''; for(let j = 1; j < numpisos - i; j++) {piso = piso + ' ';}for (let j = 0; j < i + 1; j++){piso = piso + '*';}console.log(piso)}}
pyramid(5);

/*NUMERO PERFECTO*/
const perfecto = (num) =>{ for (let i = 1; i < num; i++ ) {if (num%i==0){suma=suma+1;/*suma+=1*/ }}if (suma==num){return `el numero ${num} esperfecto`;}else{return`el numero ${num} NO es perfecto`;}}
(perfecto(25));

//condicionales//
/*Escribe un programa que pida tres números y que escriba si son los tres 
iguales, si hay dos iguales o si son los tres distintos*/

const ValidarTresNumeros = (a,b,c) =>{if (a == b && a == c) {return 100;} else if (a == b || a == c  == c){return 50;} else {return 25;}} 
console.log(ValidarTresNumeros(1,2,3));  //25
console.log(ValidarTresNumeros(1,2,3));  //50
console.log(ValidarTresNumeros(1,2,3));  //100

//funcion flecha para resolver el teorema de pitagoras
const mifuncion = (cateto1, cateto2) => Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
console.log(mifuncion(6, 10));

//funcion teorema de pitagoras
function teorema(cateto1, cateto2) {
    return console.log(Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2)));
}
teorema(6, 10)

//calcular la opreacion xn sin utilizar la funcion pow con funcion flecha */
const xn = (n, x) => {
    for (var i = 1; i <= n; i++){
        x = x * x
    }
    return console.log(Math.trunc(x))
}

(xn(6, 5))