/*Se usa para tener la estructura de los datos 
sobretodo para la base de datos
*/
const { Schema, model } = require("mongoose") //Utilizar dos caracteristicas de mongo

//constante con el nombre modelo es es un objeto que utiliza el constructor Schema de mongoose
//Ademas de realizar las validaciones para almacenar los datos
const ConsolaSchema = new Schema({ 
   idConsola: { type: Number },
   nombre: { type: String },
   fabricante: { type: String },
   lanzamiento: { type: String },
   almacenamiento: { type: String },
   precio: { type: Number },
   juegosDestacados_id: [ { type: Schema.Types.ObjectId, ref: "juegos" } ],
   enlaceImagen: { type: String }
})

//Exportar el esquema en el modelo
//funcion model  con el nombre del modelo, el esquema, nombre de la coleccion en la DB
module.exports = model("consolas", ConsolaSchema, "Consolas")