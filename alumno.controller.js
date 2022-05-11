const dataConn = require("./dataConn");
var mysql = require('mysql');

const getAlumnos = async (req, res) => {
  const pool = await dataConn.getConnection();
  const sql = "SELECT Nombre, Identificador, Email, Carrera from Alumnos";
  pool.query(sql, function (err, result) {
    if (err) throw err;
    return res.json(result);
  });
};

const getAlumnoById = async (req, res) => {
  const { id } = req.params;
  const sql = "SELECT Nombre, Identificador, Email, Carrera from Alumnos where Id = ?";

  const pool = await dataConn.getConnection();
  pool.query(sql, [id], function (err, result) {
    if (err) throw err;
    return res.json(result);
  });
};

const createAlumno = async (req, res) => {
  const { nombre, identificador, email, carrera } = req.body;
  const sql = "INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) values (?)";
  const values = [ nombre, identificador, email, carrera ];

  const pool = await dataConn.getConnection();
  pool.query(sql, [values], function (err, result) {
    if (err) throw err;
    return res.json("OK");
  });
};

const deleteAlumno = async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM Alumnos WHERE Id = ?";

  const pool = await dataConn.getConnection();
  pool.query(sql, [id], function (err, result) {
    if (err) throw err;
    return res.json("OK");
  });
};

const updateAlumno = async (req, res) => {
  const { id, nombre, identificador, email, carrera } = req.body;
  const sql = "UPDATE Alumnos SET Nombre = " + mysql.escape(nombre) + ", Identificador = " + mysql.escape(identificador) + ", Email = " + mysql.escape(email) + ", Carrera = " + mysql.escape(carrera) + " where Id = " + mysql.escape(id)

  const pool = await dataConn.getConnection();
  pool.query(sql, function (err, result) {
    if (err) throw err;
    return res.json("OK");
  });
};

module.exports = {
  getAlumnos: getAlumnos,
  getAlumnoById: getAlumnoById,
  createAlumno: createAlumno,
  deleteAlumno: deleteAlumno,
  updateAlumno: updateAlumno
}
