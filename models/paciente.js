const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pacientesSchema = new Schema({
  dni: {
    type: String,
    trim: true,
  },
  numero: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  estado: {
    type: Boolean,
    default: false,
  },
  isLogged: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Paciente", pacientesSchema);
