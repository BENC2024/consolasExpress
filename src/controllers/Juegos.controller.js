/*
Se estructura primero el modelo de la app
Aqui se hace las peticiones y respuestas
*/
const { 
   listadoJuegos,
   mostrarJuego,
   guardarJuego,
   borrarJuego,
   actualizarJuego
} = require("../services/Juegos.service") //trae los resultados de la funcion de servicio

const juegoController = { } //Un objeto de tipo controller

//Funcion flecha con los valores response y request, de manera asincrona, no interfiere con la 
//Ejecucion del programa
//Se declara el controlador
juegoController.getAllGames = async (req,res) => { 
   const listGames = await listadoJuegos() //esperar a que la funcion asincrona se complete, trayendo los resultado del servicio
   res.json(listGames) //responde con los datos, parseandolos en formato json
}

juegoController.getOneGame = async (req,res) => {
   const { id } = req.params;
   const juego = await mostrarJuego(id)
   res.json(juego)
};

juegoController.setGame = async (req,res) => {
   await guardarJuego(req.body)
   res.send("Guardado epicamente")
}

juegoController.deleteGame = async (req,res) => {
   const { id }= req.params;
   const response = await borrarJuego(id);
   res.send(response);
}

juegoController.updateGame = async (req,res) => {
   const { id }= req.params;
   const response = await actualizarJuego(req.body,id);
   res.send(response);
}


module.exports = juegoController


