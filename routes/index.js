const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/pacienteControllers");
const medicoController = require("../controllers/medicoControllers");

module.exports = function () {
  // Agrega nuevos medicos via POST
  router.post("/medicos", medicoController.nuevoCliente);

  // Obtiene todos los registros de medicos en la BD
  router.get("/medicos", medicoController.obtenerMedicos);
  // Obtiene un medico en especifico (ID)
  router.get("/medicos/:id", medicoController.obtenerMedico);

  // Actualizar un registro con un ID especifico
  router.put("/medicos/:id", medicoController.actualizarMedico);

  // Elimina un medico por su ID
  router.delete("/medicos/:id", medicoController.eliminarMedico);

  // ---------------------------------------------------------------------------------//

  // Agrega nuevos pacientes via POST
  router.post("/pacientes", pacienteController.nuevoCliente);

  // Obtiene todos los registros de pacientes en la BD
  router.get("/pacientes", pacienteController.obtenerPacientes);
  // Obtiene un paciente en especifico (ID)
  router.get("/pacientes/:id", pacienteController.obtenerPaciente);

  // Actualizar un registro con un ID especifico
  router.put("/pacientes/:id", pacienteController.actualizarPaciente);

  // Elimina un paciente por su ID
  router.delete("/pacientes/:id", pacienteController.eliminarPaciente);

  return router;
};
