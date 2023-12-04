
const { Schema, model } = require("mongoose") //Utilizar dos caracteristicas de mongo

const GeneroSchema = new Schema({ 
   descripcion: { type: String },
   anoAparicion: { type: Number },
   caracteristicasTípicas: { type: String }
})

module.exports = model("generos", GeneroSchema, "Generos")