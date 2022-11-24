const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors')

console.clear();

/* usando una promesa
const crearArchivo = (base = 5) => {

    const promesa = new Promise((resolve, reject)=>{

        let salida = '';

        for(let i = 1; i<=10; i++){

        // console.log(`${ base } x ${i} = ${base *i}`);
        salida += `${ base } x ${i} = ${base *i}\n`;

        }

        fs.writeFileSync( 'tabla-5.txt', salida);

        resolve('archivo creado.js');
    });
    return promesa;
}*/

// usando async
const crearArchivo = async(base = 5, listar=false, hasta=10) => {

    try{
        console.log(listar);
      
            let salida = '';
            let consola = '';

            for(let i = 1; i<=hasta; i++){
            // console.log(`${ base } x ${i} = ${base *i}`);
                salida += `${ base } 'x' ${i} '=' ${base * i}\n`;
                consola += `${ base } ${'x'.green} ${i} ${'='.green} ${base *i}\n`;
            }

            if(listar){
                console.log('==========================='.green);
                console.log('Probando Node', colors.blue(base));
                console.log('==========================='.green);
                console.log(consola);
                }
    
            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
            return('archivo creado.js');
        
        
    }catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo

}