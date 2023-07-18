import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getSalesController } from '../useCases/getSales'
import { getStatusController } from '../useCases/getStatus'
import { getDeliveryTypesController } from '../useCases/getDeliveryTypes'
import { getMotoboysController } from '../useCases/getMotoboys'

import { createNewLogisticInfoController } from '../useCases/createNewLogisticInfo'

const logisticRouter = Router()

logisticRouter.get('/sales', ensureAuthenticated, (req, res) => getSalesController.execute(req, res))
logisticRouter.get('/sale-status', ensureAuthenticated, (req, res) => getStatusController.execute(req, res))
logisticRouter.get('/delivery-types', ensureAuthenticated, (req, res) => getDeliveryTypesController.execute(req, res))
logisticRouter.get('/motoboys', ensureAuthenticated, (req, res) => getMotoboysController.execute(req, res))

logisticRouter.post('/logistic-info', ensureAuthenticated, (req, res) => createNewLogisticInfoController.execute(req, res))

export { logisticRouter }