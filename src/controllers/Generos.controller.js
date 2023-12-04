/*
Se estructura primero el modelo de la app
Aqui se hace las peticiones y respuestas
*/
const { listadoGeneros } = require("../services/Generos.service") //trae los resultados de la funcion de servicio

const generoController = { } //Un objeto de tipo controller

//Funcion flecha con los valores response y request, de manera asincrona, no interfiere con la 
//Ejecucion del programa
//Se declara el controlador
generoController.getAllGeneres = async (req,res) => { 
   const listGeneros = await listadoGeneros() //esperar a que la funcion asincrona se complete, trayendo los resultado del servicio
   res.json(listGeneros) //responde con los datos, parseandolos en formato json
};

/*
consolaController.getAllConsoles = async function(res,req){}
*/
module.exports = generoController


