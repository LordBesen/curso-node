
const { describe } = require('yargs');
const yargs = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');



        

     

// option('l')
//listar
//boolean





console.clear();
//console.log('base:yargs',argv.base );
//console.log(argv);

//const [, ,arg3 = 'base=5' ] = process.argv;
//const   [ , base=5] = arg3.split('=')














crearArchivo(argv.base,argv.listar,argv.limite)
   .then( nombreArchivo => console.log(nombreArchivo,'creado'))
   .catch(err => console.log(err))
 
