import {Router} from 'express'
const router = Router()

import * as paymentController from '../controllers/payment.controller'

//router.post('/',[authJwt.verifyToken, authJwt.isAdmin],productsController.createProduct)


router.post('/',paymentController.createPayment)

router.get('/', paymentController.getPayment)

router.get('/:paymentId', paymentController.getPaymentById)

router.put('/:paymentId',paymentController.updatePaymentById)

router.delete('/:paymentId',paymentController.deletePaymentById)

export default router;