const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/pacienteControllers");
const medicoController = require("../controllers/medicoControllers");
const turnoController = require("../controllers/turnoControllers");
const auth = require("../middleware/auth");

module.exports = function () {
  // Agrega nuevos medicos via POST
  router.post("/medicos", medicoController.nuevoMedico);

  // Obtiene todos los registros de medicos en la BD
  router.get("/medicos", medicoController.obtenerMedicos);
  // Obtiene un medico en especifico (ID)
  router.get("/medicos/:id", medicoController.obtenerMedico);

  // Actualizar un registro con un ID especifico
  router.put("/medicos/:id", medicoController.actualizarMedico);

  // Elimina un medico por su ID
  router.delete("/medicos/:id", medicoController.eliminarMedico);
  // Loguear medicos
  router.post("/medicos/login", medicoController.loginMedico);

  // Desloguear medicos
  router.put("/medicos/login", medicoController.logoutMedico);

  router.get("/medicos/login", auth, medicoController.getSesion);

  // ----------------------------------PACIENTES------------------------------------------//

  // Agrega nuevos pacientes via POST
  router.post("/pacientes", pacienteController.nuevoCliente);

  // Loguear pacientes
  router.post("/pacientes/login", pacienteController.loginPaciente);

  // Desloguear pacientes
  router.put("/pacientes/login", pacienteController.logoutPaciente);

  router.get("/pacientes/login", auth, pacienteController.getSesion);

  // Obtiene todos los registros de pacientes en la BD
  router.get("/pacientes", pacienteController.obtenerPacientes);

  // Obtiene un paciente en especifico (ID)
  router.get("/pacientes/:id", pacienteController.obtenerPaciente);

  // Actualizar un registro con un ID especifico
  router.put("/pacientes/:id", pacienteController.actualizarPaciente);

  // Elimina un paciente por su ID
  router.delete("/pacientes/:id", pacienteController.eliminarPaciente);

  // ---------------------------------------------------------------------------------//

  // Agrega nuevos turnos via POST
  router.post("/turnos", turnoController.nuevoTurno);

  // Obtiene todos los registros de turnos en la BD
  router.get("/turnos", turnoController.obtenerTurnos);

  // Obtiene un turno en especifico (ID)
  router.get("/turnos/:id", turnoController.obtenerTurno);

  // Actualizar un registro con un ID especifico
  router.put("/turnos/:id", turnoController.actualizarTurno);

  // Elimina un paciente por su ID
  router.delete("/turnos/:id", turnoController.eliminarTurno);

  return router;
};
