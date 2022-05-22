import Taxe from '../models/Taxe'

export const createTaxe = async (req,res) => {
    
    const {amount,type_taxe,month,fee} = req.body;
    
    const newTaxe = new Taxe({amount,type_taxe,month,fee});
    const taxeSaved = await newTaxe.save();

    res.status(201).json(taxeSaved);
    console.log("Added a taxe: ",req.body)
}

export const getTaxe = async (req,res) => {
    const taxe = await Taxe.find();
    res.json(taxe);
    console.log("Get all taxes: ", taxe)
}

export const getTaxeById = async (req,res) => {
    const taxe = await Taxe.findById(req.params.taxeId);
    res.status(200).json(taxe)
    console.log("Get taxe by id: ", taxe)
}

export const updateTaxeById = async (req,res) => {
    const updateTaxe = await Taxe.findByIdAndUpdate(req.params.taxeId, req.body, {
        new: true
    })
    res.status(200).json(updateTaxe)
    console.log("Updating taxe: ", updateTaxe)
}


export const deleteTaxeById = async (req,res) => {
    const{taxeId} = req.params;
    await Taxe.findByIdAndRemove(taxeId)
    res.status(204).json()
    console.log("Deleting taxe")
}