

const GeneroSchema = require("../models/Generos.model");
const JuegoSchema = require("../models/Juegos.model")

const listadoJuegos = async () => { //Sino es necesario no necesita req,res
   return JuegoSchema.find().populate({
      path: "genero_id",
      model: GeneroSchema
   });
}

const mostrarJuego = async (id) => {
   return await JuegoSchema.findById(id).populate({
      path: "juegosDestacados_id",  // Nombre del campo foraneo del modelo para integrarlo a este modelo
      populate: {
         path: "genero_id",
         model: generoSchema
      }      
   });
}

const guardarJuego = async (Juego) => {
   let nuevaJuego = new JuegoSchema(Juego);
   return await nuevaJuego.save();
}

const borrarJuego = async (id) => {
   try {
      const Juego = await JuegoSchema.findById(id);
      if (Juego) {
         await JuegoSchema.findByIdAndDelete(id);
         return "Juego eliminado";
      } else {
        return "No encontrado";
      }
   } catch (error) {
      return "Ocurrió un error";
   }
}

//const actualizarJuego = 

//Se exporta las funciones de los modulos
module.exports = { 
   listadoJuegos, 
   guardarJuego,
   mostrarJuego,
   borrarJuego
   //actualizarJuego
}