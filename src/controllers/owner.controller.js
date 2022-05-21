import Owner from '../models/owner'

export const createOwner = async (req,res) => {
    
    const {dni,name,lastaname,address,email,phone,vehicle} = req.body;
    
    const newOwner = new Owner({dni,name,lastaname,address,email,phone,vehicle});
    const ownerSaved = await newOwner.save();

    res.status(201).json(ownerSaved);
    console.log("Added a owner: ",req.body)
}

export const getOwner = async (req,res) => {
    const owner = await Owner.find();
    res.json(owner);
    console.log("Get all owner: ", owner)
}

export const getOwnerById = async (req,res) => {
    const owner = await owner.findById(req.params.ownerId);
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