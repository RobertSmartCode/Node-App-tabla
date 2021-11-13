const argv = require('./config/yargs');
const colors = require('colors/safe');
const { crearArchivo } = require('./multiplicar/multiplicar');
console.clear();


crearArchivo(argv.b, argv.l, argv.h)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));

// let comando = argv._[0];


// switch (comando) {

//     case 'listar':
//         listarTabla(argv.base, argv.limite, arg.listar);
//         console.log(argv);
//         break;

//     case 'crear':
//         crearArchivo(argv.base, argv.limite, arg.listar)
//             .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
//             .catch(e => console.log(e));
//         break;

//     default:
//         console.log('Comando no reconocido');

// }



// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]