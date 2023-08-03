import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { updateSaleController } from '../useCases/updateSale'
import { createSaleController } from '../useCases/createSale'
import { getPaymentTypesController } from '../useCases/getPaymentTypes'

const salesRouter = Router()

salesRouter.post('', ensureAuthenticated, (req, res) => createSaleController.exec(req, res))
salesRouter.put('', ensureAuthenticated, (req, res) => updateSaleController.exec(req, res))

salesRouter.get('/payment-types', ensureAuthenticated, (req, res) => getPaymentTypesController.exec(req, res))

export { salesRouter }