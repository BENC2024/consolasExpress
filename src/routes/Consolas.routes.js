//Proceso de configuracion de las rutas

const { Router } = require("express"); //Funcion especifica de express
const routes = Router() //Funcion routes de express

const { 
   getAllConsoles,
   getOneConsole,
   setConsole,
   deleteConsole,
   //updateConsole
} = require("../controllers/Consolas.controller") //requiero el 
//las funciones del controlador

//Para probar si la conexion funcionó
routes.get('/', (req,res) => {
   console.log("Si realizó la conexion")
   res.send("Si realizo la conexion")
})

//En ese archivo se hacen las peticiones HTTP
//Nombre de la ruta, nombre del controlador de la logica de negocio (handler,manejador)
routes.get("/listConsolas", getAllConsoles);
routes.get("/detailConsola/:id", getOneConsole);
routes.post("/saveConsola",setConsole)
routes.delete("/deleteConsola/:id", deleteConsole);

module.exports = routes // exportar las rutas
