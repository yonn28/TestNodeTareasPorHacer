const argv = require('yargs')
    .command('crear','crear una tarea',{
    descripcion:{
        demand:true,
        alias: "d",
        desc:"crear una tarea"
    }
    }).command('listar','listar las tareas',{
    descripcion:{
        demand:true,
        alias: "d",
        description:"lista todas las tareas"
    }
    }).command('actualizar','actualizar las tareas',{
    descripcion:{
        demand:true,
        alias:"d",
        description:"actualiza la tarea"
    },
    completado:{
        demand:true,
        alias:"c",
        description:"marca como completada la tarea"
    }
    })
    .argv;

module.exports ={
    argv
}


