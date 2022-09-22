/*let perro ={
    nombre:"juan", 
    edad:5,
    macho:'chi',
    ladra:function () {
        return(`${this.nombre}`,puedeladrar)
    },
};

console.log (perro.edad)
console.log (perro.macho)
console.log (perro.nombre)*/

var factura = {};
var variable;
console.log( (variable) );
variable = factura;

var factura = {
    numero: 201,
    cliente: 'Transportes Chemita',
    divisa: 'eur',
    subtotal: 350.25,
    IVA: 75.55
}

console.log (factura)

var numeroFactura = factura.numero;
var monedaFactura = factura.divisa;
var subtotalFactura = factura.subtotal;
console.log('La factura ' + numeroFactura + ' es de ' + subtotalFactura + ' ' + monedaFactura);
factura.numero = 202;   
numeroFactura = factura.numero;
console.log('La factura ' + numeroFactura + ' es de ' + subtotalFactura + ' ' + monedaFactura);
