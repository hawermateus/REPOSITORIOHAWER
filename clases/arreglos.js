function primo(num){
 var cont = 0;
 for (let i = 1; i < num; i++) {
     num%2==0?cont++:cont=cont;
 }
 //cont>2?return 'no primo': return 'no primo' ;
 return cont>2? 'no primo': 'primo';

}
 console.log(primo(4))

var x = 13
x % 2 == 0 ? console.log('par') : console.log('impar')
  //condicion? valor si es verdadero: valor si es falso
  if (x % 0) {
    console('es par')
  } else {
    console.log('impar')
  }
