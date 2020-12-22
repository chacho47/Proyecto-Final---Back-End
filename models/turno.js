const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const turnosSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    especialidad: {
        type: String,
        trim: true
    },
    medico: {
        type: String,
        trim: true,
    },
    fecha: {
        type: String,
        trim: true
    },
    hora: {
        type: String,
        trim: true
    },
    motivoConsulta: {
        type: String,
        trim: true
    },
    estado: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Turno', turnosSchema);