//*tipo de triangulo segun el tamaño de sus lados*//
function triangulo(a,b,c){
    if (a!=b && b!=c){
        console.log('escaleno');
    }else if(a==b && b==c) {
        console.log('equilatero');
    }else { 
    console.log('isosceles'); 
    }
}

(triangulo(1,2,3));

/*sacar la hipotenusa de los dos catetos*/

function  hipotenusa(a,b){
    return Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
}
console.log(hipotenusa(7,4));


