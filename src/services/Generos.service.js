

const generoSchema = require("../models/Generos.model")

const listadoGeneros = async () => { //Sino es necesario no necesita req,res
   return await generoSchema.find(); //hace una espera y retorna al controlador
}

//Se exporta las funciones de los modulos
module.exports = { listadoGeneros }