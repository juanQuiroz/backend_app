import {Schema, model} from 'mongoose'

const receiptSchema = new Schema({
    receipt_date: String,
    payment: { 
        type: Schema.Types.ObjectId,
        ref: "Payment"
    },
    user: String,
    enity: String

}, {
    timestamps: true,
    versionKey: false
})

export default model('Receipt', receiptSchema);