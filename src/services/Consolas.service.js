/*Aqui se realiza las diferentes funciones que va a realizar el controlador
Aqui se realiza la logica de negocio, es decir como se
va a comportar las peticiones- funcionalidad,
no se hacen en el controller ya que no es buena practica
*/

const juegoSchema = require("../models/Juegos.model")
const generoSchema = require("../models/Generos.model");
const consolaSchema = require("../models/Consolas.model")

const listadoConsolas = async () => { //Sino es necesario no necesita req,res
   return await consolaSchema.find().populate({
      path: "juegosDestacados_id",  // Nombre del campo foraneo del modelo para integrarlo a este modelo
      populate: {
         path: "genero_id",
         model: generoSchema
      }      
   }); //hace una espera y retorna al controlador
}

const mostrarConsola = async (id) => {
   return await consolaSchema.findById(id).populate({
      path: "juegosDestacados_id",  // Nombre del campo foraneo del modelo para integrarlo a este modelo
      populate: {
         path: "genero_id",
         model: generoSchema
      }      
   });
}

const guardarConsola = async (consola) => {
   let nuevaConsola = new consolaSchema(consola);
   return await nuevaConsola.save();
}

const borrarConsola = async (id) => {
   try {
      const consola = await consolaSchema.findById(id);
      if (consola) {
         await consolaSchema.findByIdAndDelete(id);
         return "Consola eliminada";
      } else {
        return "No encontrada";
      }
   } catch (error) {
      return "Ocurrió un error";
   }
}

//const actualizarConsola = 

//Se exporta las funciones de los modulos
module.exports = { 
   listadoConsolas, 
   guardarConsola,
   mostrarConsola,
   borrarConsola
}