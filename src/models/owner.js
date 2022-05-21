import {Schema, model} from 'mongoose'

const ownerSchema = new Schema({
    dni: String,
    name: String,
    lastname: String,
    address: String,
    phone: String,
    email: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Owner', ownerSchema);