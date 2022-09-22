/*callback*/
function crearCita(cita, callback){ 
    var miCita = "hola como esta, " + cita;
      callback(miCita); // 2
      }
        function logCita(cita){
          console.log(cita);
          }
            crearCita("soy pepito", logCita); // 1
// Resultado en la consola: 
// hola como esta, soy pepito 
