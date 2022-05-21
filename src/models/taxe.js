import {Schema, model} from 'mongoose'

const ownerSchema = new Schema({
    amount: String,

}, {
    timestamps: true,
    versionKey: false
})

export default model('Owner', ownerSchema);