const argv = require('yargs')
    // .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    // .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    // .help()
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOptions: true,
        describe: 'Es la base de la tabla de Multiplicar' 
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el numero hasta donde quieres que llegue la tabla' 
    })
    .check((argv, options) =>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;


module.exports = argv;


