      function convertirCelsiusFahrenheit(Celsius) {
          let resultado = Celsius * 9 / 5.0 + 32;
              return resultado;
                }
    function convertirFahrenheitcelsius(Fahrenheit) {
       let resultado = (Fahrenheit - 32)* 5 / 9.0 ;
          return resultado;
            }
    let Celsius= 32;
       let resultado = convertirCelsiusFahrenheit(Celsius);
          console.log(`${Celsius} °C = ${resultado}°F`);

    console.log();

let Fahrenheit= 32;
resultado = convertirFahrenheitcelsius(Fahrenheit);
console.log(`${Fahrenheit} °F = ${resultado}°C`);
