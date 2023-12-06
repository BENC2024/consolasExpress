

const generoSchema = require("../models/Generos.model");
const juegoSchema = require("../models/Juegos.model")

const listadoJuegos = async () => { //Sino es necesario no necesita req,res
   return juegoSchema.find().populate({
      path: "genero_id",
      model: generoSchema
   });
}

const mostrarJuego = async (id) => {
   return await juegoSchema.findById(id).populate({
      path: "genero_id",  // Nombre del campo foraneo del modelo para integrarlo a este modelo
      model: generoSchema
   })
}

const guardarJuego = async (Juego) => {
   let nuevaJuego = new juegoSchema(Juego);
   return await nuevaJuego.save();
}

const borrarJuego = async (id) => {
   try {
      const Juego = await juegoSchema.findById(id);
      if (Juego) {
         console.log(Juego)
         await juegoSchema.findByIdAndDelete(id);
         return "Juego eliminado";
      } else {
        return "No encontrado";
      }
   } catch (error) {
      return "Ocurrió un error";
   }
}

const actualizarJuego = async (game,id) => {
   try {
      const Juego = await juegoSchema.findById(id);
      if (Juego) {
         console.log(game)
         await juegoSchema.findByIdAndUpdate(id, game)
         return "Juego actualizado";
      } else {
        return "No encontrado";
      }
   } catch (error) {
      return "Ocurrió un error";
   }
}

//Se exporta las funciones de los modulos
module.exports = { 
   listadoJuegos, 
   guardarJuego,
   mostrarJuego,
   borrarJuego,
   actualizarJuego
}