// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');

async function getConnection(){
  try {
    const pool = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "parcial2_A00823906",
    });
    return pool;
  }
  catch(error){
    console.error(error);
  }
}

module.exports = {
  getConnection: getConnection
}
