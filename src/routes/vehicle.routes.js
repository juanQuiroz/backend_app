import {Router} from 'express'
const router = Router()

import * as vehicleController from '../controllers/vehicle.controller'

//router.post('/',[authJwt.verifyToken, authJwt.isAdmin],productsController.createProduct)


router.post('/',vehicleController.createVehicle)

router.get('/', vehicleController.getVehicle)

router.get('/:vehicleId', vehicleController.deleteVehicleById)

router.put('/:vehicleId',vehicleController.updateVehicleById)

router.delete('/:vehicleId',vehicleController.deleteVehicleById)

export default router;