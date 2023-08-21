import { Router } from 'express'

import { createDistributionCenterController } from '../useCases/createDistributionCenter'
import { updateDistributionCenterController } from '../useCases/updateDistributionCenter'
import { getDistributionCentersController } from '../useCases/getDistributionCenters'

const distributionCenterRouter = Router()

distributionCenterRouter.get('', (req, res) => getDistributionCentersController.exec(req, res))
distributionCenterRouter.post('', (req, res) => createDistributionCenterController.exec(req, res))
distributionCenterRouter.put('', (req, res) => updateDistributionCenterController.exec(req, res))

export { distributionCenterRouter }