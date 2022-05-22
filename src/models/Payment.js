import {Schema, model} from 'mongoose'

const paymentSchema = new Schema({
    pay_date: String,
    taxe: { 
        type: Schema.Types.ObjectId,
        ref: "Taxe"
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model('Payment', paymentSchema);