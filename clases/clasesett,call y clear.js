/*explicacion clase*/
function externa(){
    console.log('funcion externa al setTimeout')
    }
      const funcionExt=()=>{
        console.log('funcion externa flecha')
        }
  setTimeout(() => {
    console.log('yo amo a soacha')
      }, 2000);

  setTimeout(function(){
    console.log('funcion clasica')
      }, 3000)

  setTimeout(externa,5000);
    setTimeout(funcionExt, 6000);
      setInterval(() => {
        console.log('se repite')
          }, 3000);

  let timerid = setInterval(() => console.log('amo al sena'), 2000); 
    // despues de 5 segundos parar
      setTimeout(()=>{
        clearInterval(timerid);
          //console.log('stop');
            }, 7000);

//escriba un Programa que de 1 hasta 10 donde cada numero se muestre cada dos segundos//

  for (let i = 0; i < 11; i++) {
    setTimeout(() => {
      console.log(i);
        }, (i*1000));
} 
//imprime el mismo numero que se pide en este caso 11 por eso el var no se utiliza
  for (var i = 0; i < 11; i++) {
    setTimeout(() => {
      console.log(i);
        }, (i*1000));
} 
_________________________________________________________________________________

  function receptora(cb1,cb2,parametro){
    cb1();
      setTimeout(()=> {
        console.log(`ìmpresion de la funcion receptora`)
          }, 00);
cb2(parametro)
}
  function funcionargumento(parametro){
    console.log(`${parametro}impresion de la funcion argumento`);
    }
      receptora(()=>console.log(`funcion anonima`),funcionargumento,100);

_________________________________________________________________________________
//tambien se puede usar de esta manera sin necesidad de poner el vec//
/*function trabajoarreglos(cb1,cb2) {
  let vec=[]
    setTimeout(() => {
      console.log(vec)
        }, 1000);
          vec=cb1(vec);
            console.log(cb2(vec));
}*/

function trabajoarreglos(cb1,cb2,vec1) {
    let vec=[]
      setTimeout(() => {
        console.log(vec)
          }, 1000);
            vec=cb1(vec);
              console.log(cb2(vec));
}

  function llenararreglo(vec) {
    for (let i = 0; i < 10; i++) {
      vec[i] = Math.round(Math.random()*100)
        }
          return vec;
}
  function sumararreglo(vec) {
    let suma=0;
      for (let i = 0; i < vec.length; i++){
        suma+= vec[i];
          }
            return suma;
}
trabajoarreglos(llenararreglo,sumararreglo);
_________________________________________________________________________________

let vector = []
llenararreglo(vector);
console.log(vector);

function trabajoarreglos(cb1,cb2,vec1) {
  let vec=[]
    setTimeout(() => {
      console.log(vec)
        }, 1000);
          vec=cb1(vec);
            console.log(cb2(vec));
}

function llenararreglo(vec) {
  for (let i = 0; i < 10; i++) {
    vec[i] = Math.round(Math.random()*100)
      }
        return vec;
}
function sumararreglo(vec) {
  let suma=0;
    for (let i = 0; i < vec.length; i++){
      suma+= vec[i];
        }
          return suma;
}
  function promedioarreglo(vec) {
    for (let i = 0; i < vec.length; i++) {
      }
        return vec.length;
}

trabajoarreglos(promedioarreglo,sumararreglo,vector);

_________________________________________________________________________________
