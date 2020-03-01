
const argv = require('./config/yargs').argv;

const tareas = require('./Por-hacer/por-hacer')

let command = argv._[0];
console.log(argv)


switch(command){
    case 'crear':
        tarea=tareas.crear(argv.descripcion);
        console.log(tarea)
    break;
    case 'actualizar':

    break;
    case 'borrar':

    break;
    case 'listar':

    break;
}   