//Configuracion de la base de datos
const mongoose = require("mongoose")

//Para conocer si existe o no la conexion la base de datos
mongoose.connect(process.env.DATABASE_ATLAS)
   .then(() => {
      console.log("Conexion existosa de la base de datos");
   })
   .catch((e) => {
      console.log("No se pudo conectar a la base de datos: " + e);
   });

   