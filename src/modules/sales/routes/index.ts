import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getSalesController } from '../useCases/getSales'
import { createSaleController } from '../useCases/createSale'

const salesRouter = Router()

salesRouter.get('', ensureAuthenticated, (req, res) => getSalesController.execute(req, res))
salesRouter.post('', ensureAuthenticated, (req, res) => createSaleController.execute(req, res))

salesRouter.get('/payment-types', ensureAuthenticated, (req, res) => getSalesController.execute(req, res))

export { salesRouter }