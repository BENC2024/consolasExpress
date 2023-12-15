/*
Se estructura primero el modelo de la app
Aqui se hace las peticiones y respuestas
*/
const { 
   listadoConsolas, 
   mostrarConsola,
   guardarConsola,
   borrarConsola,
   actualizarConsola
} = require("../services/Consolas.service") //trae los resultados de la funcion de servicio

const consolaController = { } //Un objeto de tipo controller

/*Funcion flecha con los valores response y request, de manera asincrona, no interfiere con la 
Ejecucion del programa,sime declara el controlador*/

consolaController.getAllConsoles = async (req,res) => { 
   const listConsolas = await listadoConsolas() //esperar a que la funcion asincrona se complete, trayendo los resultado del servicio
   res.json(listConsolas) //responde con los datos, parseandolos en formato json
};

consolaController.getOneConsole = async (req,res) => {
   const { id } = req.params;
   const consola = await mostrarConsola(id) //esperar a que la funcion asincrona se complete, trayendo los resultado del servicio
   res.json(consola) //responde con los datos, parseandolos en formato json
};

consolaController.setConsole = async (req,res) => {
   await guardarConsola(req.body)
   res.send("Guardado correctamente");
}

consolaController.deleteConsole = async (req,res) => {
   const { id }= req.params;
   const response = await borrarConsola(id);
   res.send(response);
}

module.exports = consolaController
/*
consolaController.getAllConsoles = async function(res,req){}
*/
