import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getSalesController } from '../useCases/getSales'
import { getStatusController } from '../useCases/getStatus'
import { getDeliveryTypesController } from '../useCases/getDeliveryTypes'

import { getMotoboysController } from '../useCases/getMotoboys'
import { createMotoboyController } from '../useCases/createMotoboy'
import { updateMotoboyController } from '../useCases/updateMotoboy'
import { deleteMotoboyController } from '../useCases/deleteMotoboy'

import { createNewLogisticInfoController } from '../useCases/createNewLogisticInfo'

const logisticRouter = Router()

logisticRouter.get('/sales', ensureAuthenticated, (req, res) => getSalesController.execute(req, res))
logisticRouter.get('/sale-status', ensureAuthenticated, (req, res) => getStatusController.execute(req, res))
logisticRouter.get('/delivery-types', ensureAuthenticated, (req, res) => getDeliveryTypesController.execute(req, res))

logisticRouter.get('/motoboys', ensureAuthenticated, (req, res) => getMotoboysController.exec(req, res))
logisticRouter.put('/motoboys', ensureAuthenticated, (req, res) => updateMotoboyController.exec(req, res))
logisticRouter.post('/motoboys', ensureAuthenticated, (req, res) => createMotoboyController.exec(req, res))
logisticRouter.delete('/motoboys', ensureAuthenticated, (req, res) => deleteMotoboyController.exec(req, res))

logisticRouter.post('/logistic-info', ensureAuthenticated, (req, res) => createNewLogisticInfoController.execute(req, res))

export { logisticRouter }