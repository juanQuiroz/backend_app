import {Schema, model} from 'mongoose'

const taxeSchema = new Schema({
    amount: String,
    pay_date: String,
    month: String,
    owner: { 
        type: Schema.Types.ObjectId,
        ref: "Owner"
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model('Taxe', taxeSchema);