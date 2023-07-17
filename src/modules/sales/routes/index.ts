import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getSalesController } from '../useCases/getSales'
import { updateSaleController } from '../useCases/updateSale'
import { createSaleController } from '../useCases/createSale'
import { getPaymentTypesController } from '../useCases/getPaymentTypes'

const salesRouter = Router()

salesRouter.get('', ensureAuthenticated, (req, res) => getSalesController.execute(req, res))
salesRouter.post('', ensureAuthenticated, (req, res) => createSaleController.execute(req, res))
salesRouter.put('', ensureAuthenticated, (req, res) => updateSaleController.execute(req, res))

salesRouter.get('/payment-types', ensureAuthenticated, (req, res) => getPaymentTypesController.execute(req, res))

export { salesRouter }