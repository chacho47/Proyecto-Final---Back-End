const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const turnosSchema = new Schema({
  nombrePaciente: {
    type: String,
    trim: true,
  },
  emailPaciente: {
    type: String,
    trim: true,
  },
  especialidad: {
    type: String,
    trim: true,
  },
  nombreMedico: {
    type: String,
    trim: true,
  },
  fecha: {
    type: String,
    trim: true,
  },
  hora: {
    type: String,
    trim: true,
  },
  consulta: {
    type: String,
    trim: true,
  },
  estado: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Turno", turnosSchema);
