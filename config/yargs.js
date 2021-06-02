const argv = require('yargs')
         .option('b',{
               alias: 'base',
               type:'number',
               demandOption: true,
               

         })
         .option('l',{
            alias: 'listar',
            type:'boolean',
            default: false,
            

      })
      .option('h',{
        alias: 'hasta',
        type:'number',
        default:limite=10,
        

  })
         .check( (argv,options) => {
             console.log('yargs',argv);
               if( isNaN(argv.b)){

                  throw 'ERROR la base debe ser un numero'
               }
               return true;

         })
         .argv;

         module.exports = argv;                