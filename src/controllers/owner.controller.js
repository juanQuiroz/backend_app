import Owner from '../models/Owner'
import Payment from '../models/Payment';

export const createOwner = async (req,res) => {
    
    const {dni,name,lastaname,address,email,phone,vehicle,domiciliado} = req.body;
    
    const newOwner = new Owner({dni,name,lastaname,address,email,phone,vehicle,domiciliado});
    const ownerSaved = await newOwner.save();

    res.status(201).json(ownerSaved);
    console.log("Added a owner: ",req.body)
}

export const getOwner = async (req,res) => {
    const owner = await Owner.find().populate("vehicle");
    res.json(owner);
    console.log("Get all owner: ", owner)
}

export const getOwnerById = async (req,res) => {
    const owner = await Owner.findById(req.params.ownerId);
    res.status(200).json(owner)
    console.log("Get owner by id: ", owner)
}

export const updateOwnerById = async (req,res) => {
    const updateOwner = await Owner.findByIdAndUpdate(req.params.ownerId, req.body, {
        new: true
    })
    res.status(200).json(updateOwner)
    console.log("Updating owner: ", updateOwner)
}


export const deleteOwnerById = async (req,res) => {
    const{ownerId} = req.params;
    await Owner.findByIdAndRemove(ownerId)
    res.status(204).json()
    console.log("Deleting owner")
}

export const getOwnerAndPayment = async (req,res) => {
    const payment = await Payment.find().populate("taxe").populate({
        path    : 'owner',
        populate: [
            { path: 'vehicle' },
        ]
   });
    res.json(payment);
    console.log("Get all Owner and Payment: ",payment)
}