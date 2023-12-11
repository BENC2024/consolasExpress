
//modulo de express
const express = require("express")
const app = express() //Se utilizan las funciones de express
const cors = require('cors');

const port = process.env.PORT//Configuracion del puerto
const consolaRoutes = require(process.env.CONSOLA)
const juegoRoutes = require(process.env.JUEGO)
const generoRoutes = require(process.env.GENERO)

app.use(express.json()) //Solamente utilizar el formato json
app.use(cors()) // Uso de enlace cruzado

//Configuracion de las rutas para el proceso de iniciacion del servidor
app.use(consolaRoutes) //Use los datos recibidos en routes
app.use(juegoRoutes)
app.use(generoRoutes)

//Set para enviar configuraciones
app.set("puerto", port) 
//Uso del puerto de comunicacion en express, coloque en la variable "port"
//el valor del puerto => 3000, la configuracion del puerto para el final

module.exports = app //Exportando el modulo de express en la constante app
//Para que todo la aplicacion utilice este modulo
//PARSEO : ANALISIS DE LA ESTRUCTURA DE UN CODIGO


