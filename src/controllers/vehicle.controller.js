import Vehicle from '../models/vehicle'

export const createVehicle = async (req,res) => {
    
    const {placa,marca,modelo} = req.body;
    
    const newVehicle = new Vehicle({placa,marca,modelo});
    const vehicleSaved = await newVehicle.save();

    res.status(201).json(vehicleSaved);
    console.log("Added a vehicle: ",req.body)
}

export const getVehicle = async (req,res) => {
    console.log("controller")
    const vehicle = await Vehicle.find();
    res.json(vehicle);
    console.log("Get all vehicle: ", vehicle)
}

export const getVehicleById = async (req,res) => {
    const vehicle = await vehicle.findById(req.params.vehicleId);
    res.status(200).json(vehicle)
    console.log("Get vehicle by id: ", vehicle)
}

export const updateVehicleById = async (req,res) => {
    const updateVehicle = await Vehicle.findByIdAndUpdate(req.params.vehicleId, req.body, {
        new: true
    })
    res.status(200).json(updateVehicle)
    console.log("Updating vehicle: ", updateVehicle)
}

export const deleteVehicleById = async (req,res) => {
    const{vehicleId} = req.params;
    await Vehicle.findByIdAndRemove(vehicleId)
    res.status(204).json()
    console.log("Deleting vehicle ")
}