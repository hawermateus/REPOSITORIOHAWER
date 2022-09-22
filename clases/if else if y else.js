function TresNumeros (a,b,c){
 
    if(b < a && b < c){
        console.log('primer numero')
    }else if (a < b && a < c){
        console.log('numero medio',b)
    }else {
        console.log('tercer numero')
    }
}

TresNumeros(2,11,9)

/*Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, 
etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores*/

function Notas (n){
    if (n == 10) {
        console.log("perfecto")
    }
     else if( n > 8 ){
         console.log ('suficiente')
    }else if( n > 5){
         console.log ('bien') 
    }else if( n > 3){
     console.log('insuficiente')} 
    else {
        return ('su nota es baja')
      } 
    }

    Notas(3)

/*Escriba una funcion que reciba el array lleno y retorne otro arreglo con la diferencia 
del que hay entre el valor de cada elemento y la de la media del arreglo*/
 

function arreglo (a,b,c){
    let = []
       if(b < a && b < c){
           return('primer arreglo')
       }else if (a < b && a < c){
           return('media del arreglo',b)
       }else {
           return('tercer arreglo')
       }
   }
   
   arreglo(10,7,17)
   /*Escriba una funcion que reciba el arreglo con las diferencias del punto anterior y diga de
de cada uno cuanto le falta o cuanto le sobra segun el caso con referencia a la media*/ 

function arreglo (a,b,c){
    let = []    
       if(b < a && b < c){
           return('cuanto falta del arreglo')
       }else if (a < b && a < c){
           return('media del arreglo',b)
       }else {
           return('cuanto sobro del arreglo')
       }
   }
   
   arreglo(10,7,17)
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
