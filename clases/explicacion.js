let vector =[];
let suma =0;
    let tamaño=Math.round((Math.random()*20-10)+10);
    console.log('valor de la variable tam',tamaño)

    for (let i =0; i < tamaño; i++){
        vector[i]=Math.round(Math.random()*100);
    } console.log(vector)

  for ( let i =0; i < (vector.length  -1); i++) {
    for ( let j = i +1 ; j <(vector.length); j++) {
        if (vector[i] > vector[j]) {
        let reemplaza=vector[j] 
        vector[j] = vector[i]
        vector[i]=reemplaza;
    }
  }   

} console.log(vector )

for (let i =0; i < vector.length; i++){
    sum+vector[i]


} console.log('la suma de los elementos',sum)

let media = sum/tamaño
console.log('la media es ',medaia)*/

//evaluacion
//pimer
let vector=[];
let mayor=[];
letmayor=[];
let contador=0;
let contador1=0;
let contador2=0;
    let tamaño=Math.round((Math.random()*20-5)+5);
    console.log('valor de la variable tam', tamaño)

    for (let i=0; i < tamaño; i++){
        vector[i]=Math.round(Math.random()*100);
    } console.log(vector)

//segundo
let vector1=[];
     let tam=Math.round((Math.random()*20-5)+5);
     console.log('valor de la variable tam', tam)

     for (let i =0; < tam; i++){
        vector1[i]=Math.round(Math.random()*100);
     } console.log(vector1)

//tercero
let vector1=[];
     let tam=Math.round((Math.random()*20-5)+5);
     console.log('valor de la variable tam', t)
     
     for (let i =0; < t; i++){
        vector2[i]=Math.round(Math.random()*100);
     } console.log(vector2)


//cual es el mayor
if(tamaño > tam == tamaño > t){
    console.log('el arreglo mayor es ', tamaño)
} else if (tam > tamaño == tam > t){
    console.log('el arreglo mayor es ',tam)
}else if (t > tamaño == t > tam) {
    console.log('el arreglo mayor es ',t)
}

//rellenar
console.log('el numero de elementos es')
vector.length
console.log('1', vector)
vector1.length
console.log('2', vector2)
vector2.length
console.log('3', vector2) 

//pares - impares
console.log('los numeros pares-impares del pimes arreglos nson :')
      for (let i = 0; i< vector.length; i++){
        if (vector[i]%2==0) {
            contador+=1
            console.log('par ',vector[i])
        } else {
            contador+=1
            console.log('impar ',vector[i])
        }
      }

      console.log('los numeros pares-impares del segundo arreglos son :')
        for(let i =0; i< vector1.length; i++){
          if(vector1[i]%2==0){
            contador1+=1
            console.log('par ',vector1[i])
          } else {
            contador1+=1
            console.log('impar ',vector1[i])
          }
    }       

console.log('los numeros pares-impares del tercer arreglos son :')
for (let i =0; i< vector.length; i++){
    if (vector2[i]%2==0) {
        contador2+=1
        console.log('par ',vector2[i])
    }else {
        contador2+=1
        console.log('imapr  ',vector2[i])
    }
}    

