
const { Schema, model, SchemaType} = require("mongoose") //Utilizar dos caracteristicas de mongo

const JuegoSchema = new Schema({ 
   nombre: { type: String },
   descripcion: { type: String },
   genero_id: { type: Schema.Types.ObjectId, ref: "generos" },
   fechaLanzamiento: { type: String },
})

//Exportar el esquema en el modelo
//funcion model  con el nombre del modelo, el esquema, nombre de la coleccion en la DB
module.exports = model("juegos", JuegoSchema, "Juegos")