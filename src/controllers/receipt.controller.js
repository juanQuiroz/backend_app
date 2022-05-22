import Receipt from '../models/ Receipt'

export const createReceipt = async (req,res) => {
    
    const {receipt_date,payment,user,enity} = req.body;
    
    const newReceipt = new Receipt({receipt_date,payment,user,enity});
    const receiptSaved = await newReceipt.save();

    res.status(201).json(receiptSaved);
    console.log("Added a Receipt: ",req.body)
}

export const getReceipt = async (req,res) => {
    const receipt = await Receipt.find().populate("payment");
    res.json(receipt);
    console.log("Get all receipt: ", receipt)
}

export const getReceiptById = async (req,res) => {
    const receipt = await Receipt.findById(req.params.receiptId);
    res.status(200).json(receipt)
    console.log("Get receipt by id: ", receipt)
}

export const updateReceiptById = async (req,res) => {
    const updateReceipt = await Receipt.findByIdAndUpdate(req.params.receiptId, req.body, {
        new: true
    })
    res.status(200).json(updateReceipt)
    console.log("Updating Receipt: ", updateReceipt)
}


export const deleteReceiptById = async (req,res) => {
    const{receiptId} = req.params;
    await Receipt.findByIdAndRemove(receiptId)
    res.status(204).json()
    console.log("Deleting receipt")
}