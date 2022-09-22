/*************************
 * DEFINICION DE VARIBLES
 * ************************/
//variable de cadena de texto

var primerNombre = "jejeje";
console.log(primerNombre);
console.log(typeof(primerNombre));

//operador numerico: entero 

var edad = 18;
console.log(edad);
console.log(typeof(edad));

edad = 'diez'; //string 
console.log(edad);
console.log(typeof(edad));

//operador numerico:decimal 

var sueldo = 1800.99;
console.log(sueldo);
console.log(typeof(sueldo));

//variable booleano true o false 
var tienetrabajo = false;
console.log(tienetrabajo);
console.log(typeof(tienetrabajo));

//este tipo de dato no tiene una entrada, entonces va arrojar undefined porque js no le puede definir o ingresar un dato
var puestotrabajo;
console.log(puestotrabajo);
console.log(typeof(puestotrabajo));

var edad;
console.log(edad);
console.log(typeof(edad));

//este tipo de dato no exste entonces arroja un "null"
tienetrabajo = null;
console.log(tienetrabajo);

var cajas;



/*var edad = 18;
var sueldo = 1800.99;

console.log(edad);*/

var edad = 18;
var sueldo = 1800.99;

console.log(edad);


/**************************
 * operadores aritmeticos +, -, *, /
 */
var edadAna, edadMaria, edadHawer, diferenciaEdad;
var sumEdades, yearANA, yearMaria, yearHawer, yearactual;

edadAna = 37;
edadMaria = 17;
edadHawer = 18;
yearactual = 2022;

diferenciaEdad = edadAna - edadMaria - edadHawer;
sumEdades = edadAna + edadMaria + edadHawer;

yearANA = yearactual - edadAna;
yearMaria = yearactual - edadMaria;
yearHawer = yearactual - edadHawer;

console.log(diferenciaEdad);
console.log(sumEdades);
console.log('Año en que nacio Ana' + yearANA);
console.log('Año en que nacio Maria' + yearMaria);
console.log('Año en que nacio Hawer' + yearHawer);
console.log(yearactual * 5);
console.log(yearactual / 2);

/****
 * Operadores logicos, unarios y de asignacion
 */
//logios < > <= >= == son utilizados para hacer comparaciones

var edadNicolas, edadValentina, diferenciaEdad;
edadNicolas = 22;
edadValentina = 17;
//si es mayor se devuelve (true)
var mayorNicolas = edadValentina > edadNicolas;
console.log(mayorNicolas);

//estamos preguntando si nicolas es menor que valentina nos tiene que dar (false)
var mayorNicolas = edadValentina < edadNicolas;
console.log(mayorNicolas);

//si es menor se devuelve (true)
var menorValentina = edadNicolas < edadValentina;
console.log(menorValentina);

//Deberia dar false ya que no son iguales (==) pero al hora de colocar afuera del parentesis un valor de negacionv (!) se convierte en (true)
var menorValentina = !(edadNicolas == edadValentina);
console.log(menorValentina);


//usuarios, ++Incremento, --Decremento

//incrementa un año mas cuando colocamos los operadores (++)
edadNicolas++;
console.log(edadNicolas);


//incrementa varios años cuando se le coloca los operadores (x=x+10 o x+=7)
edadNicolas = edadNicolas + 8; //x+=8// 
console.log(edadNicolas);

//disminuye varios años cuando se le coloca los operadores (x=x-10 o x-=7)
edadNicolas = edadNicolas - 6; //x-=6// 
console.log(edadNicolas);

//Asignacion, +=, -=, *=, /=, %=
var a = 11;
var b = 13;


var c = a % 7; //residuo o resta de una division 
console.log(c);
a = a + b;