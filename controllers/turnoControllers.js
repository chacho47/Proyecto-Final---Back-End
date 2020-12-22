const Turno = require("../models/Turno");

// Cuando se crea un nuevo cliente
exports.nuevoTurno = async (req, res, next) => {
  // crear objeto de turno con datos de req.body
  const turno = new Turno(req.body);

  try {
    await turno.save();
    res.json({ mensaje: "El turno se agregó correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

/** Obtiene todos los turnos */

exports.obtenerTurnos = async (req, res, next) => {
  try {
    const turnos = await Turno.find({});
    res.json(turnos);
  } catch (error) {
    console.log(error);
    next();
  }
};

/** Obtiene un turno en especifico por su ID */
exports.obtenerTurno = async (req, res, next) => {
  try {
    const turno = await Turno.findById(req.params.id);
    res.json(turno);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Actualiza un registro por su ID
exports.actualizarTurno = async (req, res, next) => {
  try {
    const turno = await Turno.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(turno);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Elimina un turno por su id
exports.eliminarTurno = async (req, res, next) => {
  try {
    await Turno.findOneAndDelete({ _id: req.params.id });
    res.json({ mensaje: "El turno fue eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};