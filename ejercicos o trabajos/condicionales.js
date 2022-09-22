/*Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el 
valor del medio es 11. No use operadores lógicos*/

let num1, num2, num3, h, mayor;
num1 = parseInt(prompt(`ingrese el primer numero:`));
num2 = parseInt(prompt(`ingrese el segundo numero:`));
num3 = parseInt(prompt(`ingrse el tercer numero:`));
if (num1 > num2){
    h = num1;
}else{
    h = num2;
}
if (h > num3){
    mayor = h;
}else{
    mayor = num3;
}
document.write(`el numero mayor es: + mayor`);

/*Escribe un programa que pida tres números y que escriba si son los tres 
iguales, si hay dos iguales o si son los tres distintos*/

function ValidarTresNumeros(a,b,c){
    if (a == b && a == c) {
        return 100;
    } else if (a == b || a == c  == c){
        return 50;
    } else {
        return 25;
    }
}

console.log(ValidarTresNumeros(1,2,3));  //25
console.log(ValidarTresNumeros(1,2,3));  //50
console.log(ValidarTresNumeros(1,2,3));  //100

/*Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, 
etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores*/

var notas;
var promedio;
var suma = 0;

 var notas = parseInt(prompt(`digite la cantidad de notas a promediar`))

  for (i = 0; i < notas; i++) {
       var notas = parseInt(prompt(`digite nota `+ i));
       suma = suma  + notas;  
    }

    promedio = suma / notas;

    alert(`el resultado es ` + promedio);
    
//ejercicio 1: generar un numero aleatorio entero entre un rango dado usado  la funcion math. random().

 let inicio = 1;
  let fin = 100;
    let enteroAleatorio = inicio + Math.floor(Math.random() * fin);
       console.log(enteroAleatorio);

//generara una funcion de numeros aleatorios

function generarAleatorios(Minimo, Maximo){
    return Math.floor(Math.random() * (Minimo, Maximo) + Minimo);
}

for(let i = 1; i  <= 10 ++i){
    console.log(generarAleatorios(1, 100));
}
//generar numeros aleatorios
function imprimirNumeros(){
    for (let index = 1; index <= 10; index++){

    }  
}

imprimirNumeros();

//* calcular el promedio  de varios  numeros  usando la funcion reduce()

let = numeros = [2, 3, 5, 7, 11, 13, 17];
      let suma  = numeros.reduce((a,n) => (a += n, a), 0);
         console.log(suma);

          console.log();
    let promedio = suma / numeros.length;
       console.log(promedio); // 8.28
       

       /* Escriba métodos para suma, promedio, mayor, menor. */
