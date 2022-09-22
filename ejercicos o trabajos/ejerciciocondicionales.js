//CONDICIONALES//
/*Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el 
valor del medio es 11. No use operadores lógicos*/
 
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

/*funcion flecha*/

const TresNumeros = (a,b,c) => {    if(b < a && b < c){ console.log('primer numero') }else if (a < b && a < c){console.log('numero medio',b)}else { console.log('tercer numero')}}
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

/*escriba una funcion que llener un array con n numeros(n debe ser minimo 5 y maximo 25)*/

  function Num (a,b)
    let=a
    let=b
    let = []
    let Num = Math.round(((Math.random)*25-5)+5)
          console.log(a,b)    
    
      for (let a = 0; a < b;)*100 
        if(a%b == 0)
            console.log(11,8);

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
   

