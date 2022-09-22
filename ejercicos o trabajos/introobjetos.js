class producto1{

}

var producto=new producto1();
console.log(typeof(producto1));

// class producto1 {
//}
//var producto1=new producto();
//var producto2=new producto();
//var producto3=new producto();
//var producto4=new producto();
//console.log(typeof(a));

/*productos literares*/
 const x = [];
 var a = {}
 console.log(typeof(a));

 var persona = {
    nombre: 'hawer',
    id: 12345,
    datoscompletos: () => console.log(`${persona.nombre},${persona.id}`),
 
}
console.log(persona);
console.log(persona.nombre);
console.log(persona['id']);
persona.datoscompletos();
persona.dirreccion = 'calle 19 A';
console.log(persona);
persona.nombre ='alejandra lopez'
console.log(persona);
delete persona.id;
console.log(persona);

/*ejercicio clase  figura*/


const fi = [];
    var figuras = {
     nombre: `triangulo`,
     base: `25`,
     altura: `45`,
     area: () => console.log(`El area del triangulo es: ${(figuras.base * figuras.altura) / 2} cm2 `)

    }
 
figuras.area()

/* figura*/


const oc = [];
    var figuras = {
     nombre: `octagono`,
     lado1: 5,
     lado2: 4,
     lado3: 12,
     lado4: 1,
     lado5: 6,
     lado6: 7,
     lado7: 8,
     lado8: 2,
     suma: () => console.log(`El suma y division del octagono es: ${(figuras.lado1 + figuras.lado2 + figuras.lado3 + figuras.lado4 + figuras.lado5 +  figuras.lado6 + figuras.lado7 + figuras.lado8) / 2} cm2 `)

    }
 
figuras.suma()


/*cuadrado*/

const cu = [];
    var figuras = {
     nombre: `cuadrado`,
     perimetro: `10`,
     area: `25`,
     diagonal: () => console.log(`La diagonal del cuadro es: ${(figuras.perimetro * figuras.area) / 2} cm2 `)

    }
 
figuras.diagonal()

/*rectangulo*/
const r = [];
    var figuras = {
     nombre: `rectangulo`,
     base: `18`,
     altura: `12`,
     lado1: `12`,
     lado: `18`,
     perimetro: () => console.log(`El perimetro del triangulo es: ${(figuras.base * figuras.altura) / 2} cm2 `)

    }
 
figuras.perimetro()

/*circunferencia*/
var circunferencia= {
    t : 3.14,
    radio: 5,
    a: 2,
    circunferencia: ()=> console-log(`${(circunferencia.a*circunferencia.t)*circunferencia.radio}`)
}
circunferencia.circunferencia()
