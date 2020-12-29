const Paciente = require("../models/Paciente");
const jwt = require("jsonwebtoken");

// Cuando se loguea un paciente
exports.loginPaciente = async (req, res, next) => {
  try {
    await Paciente.findOne({ username: req.body.username }, (err, paciente) => {
      if (err) console.log(err);
      if (paciente) {
        if (paciente.password == req.body.password) {
          Paciente.findOneAndUpdate(
            { _id: paciente._id },
            { isLogged: true },
            {
              new: true,
            }
          );
          const payload = {
            user: {
              id: paciente._id
            }
          }
          try {
            jwt.sign(
              payload,
              "randomString",
              {
                expiresIn: 3600
              },
              (err, token) => {
                if (err) throw err;
                res.status(200).json({
                  token
                });
              }
            );
          } catch (e) {
            console.log(e);
          }
        } else {
          res.json({ mensaje: "El password es incorrecto." });
        }
      } else {
        res.json({ mensaje: "No se encontro el usuario." });
      }
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Cuando se desloguea un paciente
exports.logoutPaciente = async (req, res, next) => {
  try {
    await Paciente.findOneAndUpdate(
      { id_: req.body._id },
      { isLogged: false },
      {
        new: true,
      },
      (err, paciente) => {
        res.json({ mensaje: "Usuario cerro sesion." });
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getSesion = async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await Paciente.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
}

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
  // crear objeto de paciente con datos de req.body
  try {
    const paciente = new Paciente({
      dni: req.body.dni,
      numero: req.body.numero,
      username: req.body.email,
      password: req.body.contrasena,
    });
    await paciente.save();
    res.json({ mensaje: "El paciente se agregó correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

/** Obtiene todos los pacientes */

exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

/** Obtiene un paciente en especifico por su ID */
exports.obtenerPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Actualiza un registro por su ID
exports.actualizarPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Elimina un paciente por su id
exports.eliminarPaciente = async (req, res, next) => {
  try {
    await Paciente.findOneAndDelete({ _id: req.params.id });
    res.json({ mensaje: "El paciente fue eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
