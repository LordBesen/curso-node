const fs = require('fs');



const crearArchivo = async(base =5,listar = false, limite = 10) => {


    try {

        if (listar) {
        let salida = ''
    


         for (let  i=1;i <= 10;i++) {
    
          salida +=`${base} x ${i} = ${base*i}\n`;
         
    }
         fs.writeFileSync(`./salida/tabla ${base}.txt;`,salida);
         console.log(salida);
         return `tabla del ${base}`;

        }
         
    
    
      

    } catch (err) {
        throw err ;
    }
    
    
    
}
module.exports = {

    crearArchivo
}

/*const getEmpleado = (id) => {

    const empleado = empleados.find( e => e.id == id)?.nombre;
    return new Promise((resolve,reject) => {

    (empleado)

        ? resolve(empleado)
        : reject(`no existe empleado con id ${id}`);
    } 

    );
        

    
   }*/