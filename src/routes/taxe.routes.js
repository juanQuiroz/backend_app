import {Router} from 'express'
const router = Router()

import * as taxeController from '../controllers/taxe.controller'

//router.post('/',[authJwt.verifyToken, authJwt.isAdmin],productsController.createProduct)


router.post('/',taxeController.createTaxe)

router.get('/', taxeController.getTaxe)

router.get('/:taxeId', taxeController.getTaxeById)

router.put('/:taxeId',taxeController.updateTaxeById)

router.delete('/:taxeId',taxeController.deleteTaxeById)

export default router;