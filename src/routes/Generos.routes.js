//Proceso de configuracion de las rutas

const { Router } = require("express"); //Funcion especifica de express
const routes = Router() //Funcion routes de express

const { 
   getAllGeneres
} = require("../controllers/Generos.controller") //requiero el 
//las funciones del controlador

//En ese archivo se hacen las peticiones HTTP
//Nombre de la ruta, nombre del controlador de la logica de negocio (handler,manejador)
routes.get("/listGeneros", getAllGeneres);

module.exports = routes // exportar las rutas