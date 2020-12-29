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
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  isLogged: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Medico", medicoSchema);
