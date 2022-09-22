//onjetos estado y comportamiento
//var x =12;// las variables tradicionales solo tienen objectos 
//solo tienen estado
    class animal{
    xcv(){} 

} 
const objeto1=new animal();
console.log(typeof(objeto1))


var x =12;
    class animal{
    constructor(){
       console.log(`se activo el contructor`)
    } 
  mensaje(){
    console.log(`soy un mensaje`)
  }
}

const objeto1=new animal();
objeto1.mensaje();
console.log(typeof(objeto1))

var x =12;
    class animal{
    constructor(){
       //console.log(`se activo el contructor`)
    } 
  mensaje(){
    console.log(`soy un mensaje`)
  }
}

const objeto1=new animal();
objeto1.mensaje();
//console.log(typeof(objeto1))


// function suma(num1,num2 ){
//     return num1 + num2;
// }

// suma(100,200)
// suma(objeto1,"sirve");

var x =12;
    class animal{
    constructor(nombre){
        this.nombre=nombre;
       //console.log(`se activo el contructor`)
    }
  mensaje(){
    console.log(`soy un mensaje`)
  }
   
}

const objeto1=new animal();
objeto1.mensaje();
//console.log(typeof(objeto1))


/*set y get antiguos*/
var x =12;
    class animal{
    constructor(nombre){
        this.nombre=nombre;
       //console.log(`se activo el contructor`)
    }
     
  mensaje(){
    console.log(`soy un mensaje`)
  }
   GetNombre(){
    return this.nombre;
}
    SetNombre(){
    return this.nombre;
}

}

const objeto1=new animal();
console.log(objeto1);
objeto1.setnombre('liebre')
console.log(objeto1.getnombre())
objeto1.mensaje();

/*set y get actuales*/
var x =12;
    class animal{
    constructor(nombre){
        this.nombre=nombre;
       //console.log(`se activo el contructor`)
    }
     
  mensaje(){
    console.log(`soy un mensaje`)
  }
  get nombre(nombre){
    this.nombre_nombre=nombre;
}  
set nombre(nombre){
    this.nombre_nombre=nombre;
 }
}
mensaje(){
    console.log('soy un mensaje');
}

var objeto1=new animal('conejo');
console.log(objeto1)
//objeto1.setNombre('liebre')
objeto1.nombre='conejo domesticado'
//console.log(objeto1.getnombre())
console.log(objeto1.nombre)
objeto1.mensaje();
console.log(typeof(objeto1))

/*otro ejercicio*/
class Numeros{
    constructor(vector){
        this.vector=vector
    
    }
    llenarVector(tam){
        for (let i = 0; i < tam; i++) {
            this.vector=Math.round(Math.random(*100))


        }
    }
    get vector() {
        return this._vector;
    }
}
let vector = []
let ob = new Numeros(vec);
ob.llenarVector(10);
console.log(ob._vector);

