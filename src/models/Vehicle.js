import {Schema, model} from 'mongoose'

const vehicleSchema = new Schema({
    placa: String,
    marca: String,
    modelo: String,
}, {
    timestamps: true,
    versionKey: false
})

export default model('Vehicle', vehicleSchema);