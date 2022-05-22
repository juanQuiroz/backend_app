import {Router} from 'express'
const router = Router()

import * as ownerController from '../controllers/owner.controller'

//router.post('/',[authJwt.verifyToken, authJwt.isAdmin],productsController.createProduct)

router.get('/all', ownerController.getOwnerAndPayment)
router.post('/',ownerController.createOwner)

router.get('/', ownerController.getOwner)

router.get('/:ownerId', ownerController.getOwnerById)

router.put('/:ownerId',ownerController.updateOwnerById)

router.delete('/:ownerId',ownerController.deleteOwnerById)



export default router;