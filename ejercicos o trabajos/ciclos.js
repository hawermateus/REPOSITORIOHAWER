//ciclos//
//piramide//
function pyramid(numpisos){
    for (let i = 0; i < numpisos; i++){
        let piso = '';
        for(let j = 1; j < numpisos - i; j++) {
            piso = piso + ' ';
        }
        for (let j = 0; j < i + 1; j++){
            piso = piso + '*';
        }
        console.log(piso)
    }
}
pyramid(5);

//numeros primos//
var numeroPrimo = 73;
var esNumeroPrimo = true;

for (var i = 2; i < numeroPrimo/2; i++) {
    if (numeroPrimo % i === 0) {
        esNumeroPrimo = false;
    }
}

    if(esNumeroPrimo){
        console.log(' Si es un numero primo', numeroPrimo);
    } else {
        console.log(' No es un numero primo', numeroPrimo);
    }

    //condicionales//

/*NUMERO PERFECTO*/
function perfecto(num){   
   for (let i = 1; i < num; i++ ) {
        if (num%i==0){
            suma=suma+1;//suma+=1
        }
    }
 if (suma==num){
    return `el numero ${num} esperfecto`;
 }
 else{
    return`el numero ${num} NO es perfecto`;
 }
}
(perfecto(25));

/*Determinar cuales y cuantos números perfectos hay entre 1 y 1000*/

var x,i;
var x = Math.round(Math.random()*100)
console.log(x);

console.log("sus divisores son: ")
for(i= 1; i <= x; i++ ) {
    if(x%i ==0) {
         console.log(i);
    }
}

 /*Calcular el máximo de números positivos introducidos por 
teclado, sabiendo que metemos números hasta que 
introduzcamos uno negativo. El negativo no cuenta*/

x=10;
console.log(x)
if (x>0){
    console.log('positivo')
}else if(x<0){
    console.log('negatico')
}else
console.log('cero')

