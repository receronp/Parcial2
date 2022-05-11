const express = require("express")
const alumnoController = require("./alumno.controller")

const router = express.Router();
router.get("/alumno", alumnoController.getAlumnos);
router.get("/alumno/:id", alumnoController.getAlumnoById);
router.post("/alumno", alumnoController.createAlumno);
router.delete("/alumno/:id", alumnoController.deleteAlumno);
router.put("/alumno", alumnoController.updateAlumno);

module.exports = router;
