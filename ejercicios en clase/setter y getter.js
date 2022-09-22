class persona{
    constructor(nombre,documento){
        this._nombre=nombre;
        this._documento=documento;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    set documento(documento){
        this._documento=documento;
    }
    get nombre () {
        return this._nombre;
    }
    get documento (){
    return this._documento;
    }
}

class aprendiz extends persona {
    constructor(nombre,documento,ficha) {
        super(nombre,documento);
        this._ficha=ficha;
    }
    set ficha(_ficha){
        this._ficha=this.ficha
    }
    get ficha(){
        return this._ficha
    }
    imprimirtodo(){
    console.log(this._nombre)  
    console.log(this._documento) 
    console.log(this._ficha) 
    }
}
let obt1=new persona('maria gomez',12345,206);
let obt2=new aprendiz('hawer mateus',2515397,'ADSI');
obt2.imprimirtodo();
obt2.nombre="luna mateus"