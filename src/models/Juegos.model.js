
const { Schema, model, SchemaType} = require("mongoose") //Utilizar dos caracteristicas de mongo

const JuegoSchema = new Schema({ 
   nombre: { 
      type: String,
      required: [true,'Nombre requerido']
   },
   descripcion: { 
      type: String,
      required: [true,'Descripcion requerida']
   },
   genero_id: { 
      type: Schema.Types.ObjectId, 
      ref: "generos", //esquema,tipo,obid mas referencia del modelo a agregar
      required: [true,'Falta genero del videojuego']
   }, 
   fechaLanzamiento: { 
      type: String,
      required: [true,'Agregar fecha de lanzamiento']
   },
})

//Exportar el esquema en el modelo
//funcion model  con el nombre del modelo, el esquema, nombre de la coleccion en la DB
module.exports = model("juegos", JuegoSchema, "Juegos")