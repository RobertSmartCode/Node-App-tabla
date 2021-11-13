// requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo =  async (base=5, listar =false, hasta = 10) => {

  try {

    let data, consola = '';
    for (let i = 1; i <= hasta; i++) {
        data += `${ base } * ${ i } = ${ base * i }\n`;
        consola += `${ base } ${'*'.green} ${ i } ${'='.green} ${ base * i }\n`;
       
    }
    if(listar){
        console.log('=================='.green);
        console.log(`    tabla de`.green, colors.blue(base) );
        console.log('=================='.green);
        console.log(consola);
    }
  
    

    fs.writeFileSync(`tablas/tabla-${ base }-al-${ hasta }.txt`, data)
 
    return (`tabla-${ base }-al-${ hasta }.txt creada`);
      
  } catch (err) {
      throw err;
  }
}
      
module.exports = {
    crearArchivo
    
}