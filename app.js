const { option, number } = require('yargs');
const colors = require('colors')
const { crearArchivo } = require('./helpers/multiplicar');
const  argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe:'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false,
                        describe: 'Muestra la lista de la tabla de multiplicar'
                    }
                    )
                    .option('h',{
                        alias: 'Hasta',
                        type: 'number',
                        demandOption: true,
                        default: 10,
                        describe: 'Tabla de multiplicar hasta: h'
                    }
                    )
                    .check( (argv, options) =>{
                    
                        if( isNaN(argv.base) ){
                            throw 'La Base debe ser un número'
                        }
                        return true;
                    })
                    .argv;


console.clear();
console.log(argv);

crearArchivo( argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'Archivo creado..!'))
    .catch(err => console.log(err));



/*
const [ , , arg3 = 'base=5'] = process.argv;
const [ , base =5] = arg3.split('=');

console.log(base)
*/


//const base = 3;



/*let salida = '';
s
for(let i = 1; i<=10; i++){

   // console.log(`${ base } x ${i} = ${base *i}`);
   salida += `${ base } x ${i} = ${base *i}\n`;

}

//console.log("salida:\n"+ salida);

/*fs.writeFile( 'tabla-5.txt', salida, (err) =>{
    if (err) throw err;

    console.log('archivo creado');

} )

fs.writeFileSync( 'tabla-5.txt', salida);

console.log('archivo creado');*/


