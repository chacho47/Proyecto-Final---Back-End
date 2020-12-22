const Medico = require("../models/Medico");

// Cuando se crea un nuevo Medico
exports.nuevoMedico = async (req, res, next) => {
  // crear objeto de paciente con datos de req.body
  const medico = new Medico(req.body);

  try {
    await medico.save();
    res.json({ mensaje: "El medico se agregó correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

/** Obtiene todos los pacientes */

exports.obtenerMedicos = async (req, res, next) => {
  try {
    const medicos = await Medico.find({});
    res.json(medicos);
  } catch (error) {
    console.log(error);
    next();
  }
};

/** Obtiene un medico en especifico por su ID */
exports.obtenerMedico = async (req, res, next) => {
  try {
    const medico = await Medico.findById(req.params.id);
    res.json(medico);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Actualiza un registro por su ID
exports.actualizarMedico = async (req, res, next) => {
  try {
    const medico = await Medico.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(medico);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Elimina un medico por su id
exports.eliminarMedico = async (req, res, next) => {
  try {
    await Medico.findOneAndDelete({ _id: req.params.id });
    res.json({ mensaje: "El medico fue eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
