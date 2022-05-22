import Payment from '../models/Payment'

export const createPayment = async (req,res) => {
    
    const {state,pay_date,amount,taxe,owner} = req.body;
    
    const newPayment = new Payment({state,pay_date,amount,taxe,owner});
    const paymentSaved = await newPayment.save();

    res.status(201).json(paymentSaved);
    console.log("Added a Payment: ",req.body)
}

export const getPayment = async (req,res) => {
    const payment = await Payment.find().populate("taxe").populate("owner");
    res.json(payment);
    console.log("Get all payment: ", payment)
}

export const getPaymentById = async (req,res) => {
    const payment = await Payment.findById(req.params.paymentId);
    res.status(200).json(payment)
    console.log("Get payment by id: ", payment)
}

export const updatePaymentById = async (req,res) => {
    const updatePayment = await Payment.findByIdAndUpdate(req.params.paymentId, req.body, {
        new: true
    })
    res.status(200).json(updatePayment)
    console.log("Updating Payment: ", updatePayment)
}


export const deletePaymentById = async (req,res) => {
    const{paymentId} = req.params;
    await Payment.findByIdAndRemove(paymentId)
    res.status(204).json()
    console.log("Deleting payment")
}