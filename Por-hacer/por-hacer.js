const fs = require('fs');

listPorhacer=[];

const GuardarDB = () => {
    let values = JSON.stringify(listPorhacer);
    fs.writeFile("./db/tareasDB.json",values,(err)=>{
        if(err){
             throw new Error('no se pudo grabar', err);            
        }

    })
}

const crear = (descripcion) => {
    let item = {
        descripcion,
        completado: false
    }
    listPorhacer.push(item);
    GuardarDB();
    return listPorhacer;
}

module.exports={
    crear
}