const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca completado la tarea'
}

const argv = require('yargs')



.command('crear', 'crear un elmento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Se ha borrado la tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}