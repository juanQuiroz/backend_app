import {Schema, model} from 'mongoose'

const paymentSchema = new Schema({
    pay_date: String,
    amount: String,
    taxe: { 
        type: Schema.Types.ObjectId,
        ref: "Taxe"
    },
    owner: { 
        type: Schema.Types.ObjectId,
        ref: "Owner"
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model('Payment', paymentSchema);