const a = new Promise ((resolve, reject) => {
    setTimeout(() => {   
        resolve('hola mundo');  
        reject('hola como estas');
    }, 3000);
    });
    a
        .then((resolve)=>{
            console.log('resolve:', resolve);
        })
        .catch((error)=>{
            console.log('error:',error);
        })

        function mayusculas(mayusculas) {
            let conso="'A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'";
            let count = 0;
            
            for (let letra of mayusculas ) {
                if (conso.includes(letra.toLowerCase())) {
                    count++;
                }
            }
        return count
        }
        
        const cadena = ('cOmpUtAdoR')
        const result = mayusculas(cadena);
        console.log(result);