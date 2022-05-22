import {Router} from 'express'
const router = Router()

import * as receiptController from '../controllers/receipt.controller'

//router.post('/',[authJwt.verifyToken, authJwt.isAdmin],productsController.createProduct)


router.post('/',receiptController.createReceipt)

router.get('/', receiptController.getReceipt)

router.get('/:receiptId', receiptController.getReceiptById)

router.put('/:receiptId',receiptController.updateReceiptById)

router.delete('/:receiptId',receiptController.deleteReceiptById)

export default router;