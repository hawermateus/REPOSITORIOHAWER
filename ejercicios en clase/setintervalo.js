/*setintervalo*/
var intervalID = setInterval(hola, 500, 'parámetro 1', 'parámetro 2');
function hola(a, b) {
  // Tu código debe ir aquí
    // Los parámetros son totalmente opcionales
      console.log(a);
        console.log(b);
          clearTimeout(hola);
            console.log(hola)
}
