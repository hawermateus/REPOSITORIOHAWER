function externa(){
    console.log('funcion externa al setTimeout')
    }
      const funcionExt=()=>{
        console.log('funcion externa flecha')
        }
  setTimeout(() => {
    console.log('yo amo a soacha')
      }, 2000);

  setTimeout(function(){
    console.log('funcion clasica')
      }, 3000)

  setTimeout(externa,5000);
    setTimeout(funcionExt, 6000);
      setInterval(() => {
        console.log('se repite')
          }, 3000);

  let timerid = setInterval(() => console.log('amo al sena'), 2000); 
    // despues de 5 segundos parar
      setTimeout(()=>{
        clearInterval(timerid);
          //console.log('stop');
            }, 7000);
