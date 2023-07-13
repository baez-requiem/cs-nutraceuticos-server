import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getSalesController } from '../useCases/getSales'

const logisticRouter = Router()

logisticRouter.get('/sales', ensureAuthenticated, (req, res) => getSalesController.execute(req, res))

export { logisticRouter }