const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicoSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
  },
  especialidad: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  contrasena: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Medico", medicoSchema);
