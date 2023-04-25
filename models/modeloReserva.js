import mongoose from 'mongoose';

const Schema = mongoose.Schema

const Reserva = new Schema({

    idhabitacion: {
        type: String,
        required: true,
    },
    nombrecliente: {
        type: String,
        required: true,
    },
    apellidocliente: {
        type:String,
        required: true
    },
    fechainicioreserva: {
        type: Date,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    numeropersonas: {
        type: Number,
        required: true
    },
    numeroniños: {
        type: Number,
        required: true
    },
    numeroadultos: {
        type: Number,
        required: true
    }

})

export const modeloReserva = mongoose.model('reservas',Reserva)