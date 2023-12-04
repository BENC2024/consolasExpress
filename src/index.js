//Aqui en el index se traen las configuraciones del servidor ya que es
//donde se inicializa la aplicacion

require('dotenv').config(); // Cargar la configuracion del env

require('./config/database') //Utilizar la configuracion de la base de datos
//Solamente va al archivo y ejecuta el codigo en dicha ruta

const server = require("./config/server") //Buscar el campo que se exporto que es app 
//en server de express

const handle = server.get('puerto') //Extrae el valor de la conexion de configuracion de 'puerto'
server.listen( handle, () => {
      console.log("Conexion existosa del puerto: ",handle);
   })

/*
server.listen( 
   server.get('port'), function conexion() {
      console.log('Conexion existosa del puerto');
   })
)
*/