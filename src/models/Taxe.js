import {Schema, model} from 'mongoose'

const taxeSchema = new Schema({
    type_taxe: String,
    month: String,
    fee: String,

}, {
    timestamps: true,
    versionKey: false
})

export default model('Taxe', taxeSchema);