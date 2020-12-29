const Medico = require("../models/Medico");
const jwt = require("jsonwebtoken");
// Cuando se crea un nuevo Medico
exports.nuevoMedico = async (req, res, next) => {
  // crear objeto de medico con datos de req.body
  const medico = new Medico(req.body);
  try {
    await medico.save();
    res.json({ mensaje: "El medico se agregó correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

/** Obtiene todos los medicos */

exports.obtenerMedicos = async (req, res, next) => {
  try {
    let query = {};
    if (req.query.especialidad) {
      query = req.query;
    }
    const medicos = await Medico.find(query);
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

// Cuando se loguea un medico
exports.loginMedico = async (req, res, next) => { console.log(req.body)
  try {
    await Medico.findOne({ username: req.body.username }, (err, medico) => {
      if (err) console.log(err);
      if (medico) {
        if (medico.password == req.body.password) {
          Medico.findOneAndUpdate(
            { _id: medico._id },
            { isLogged: true },
            {
              new: true,
            }
         );
          const payload = {
            user: {
              id: medico._id
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

// Cuando se desloguea un medico
exports.logoutMedico = async (req, res, next) => {
  try {
    await Medico.findOneAndUpdate(
      { id_: req.body._id },
      { isLogged: false },
      {
        new: true,
      },
      (err, medico) => {
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
    const user = await Medico.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
}