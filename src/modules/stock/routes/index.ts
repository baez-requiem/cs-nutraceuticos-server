import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { createMisplacementController } from '../useCases/createMisplacement'
import { deleteMisplacementController } from '../useCases/deleteMisplacement'
import { getMisplacementsController } from '../useCases/getMisplacements'

import { createNewBatchController } from '../useCases/createNewBatch'
import { deleteBatchController } from '../useCases/deleteBatch'
import { getBatchesController } from '../useCases/getBatches'
import { updateBatchController } from '../useCases/updateBatch'

import { getStockProductsController } from '../useCases/getStockProducts'

const stockRouter = Router()

stockRouter.get('/misplacements', ensureAuthenticated, (req, res) => getMisplacementsController.exec(req, res))
stockRouter.post('/misplacements', ensureAuthenticated, (req, res) => createMisplacementController.exec(req, res))
stockRouter.delete('/misplacements', ensureAuthenticated, (req, res) => deleteMisplacementController.exec(req, res))

stockRouter.get('/batches', ensureAuthenticated, (req, res) => getBatchesController.exec(req, res))
stockRouter.put('/batches', ensureAuthenticated, (req, res) => updateBatchController.exec(req, res))
stockRouter.post('/batches', ensureAuthenticated, (req, res) => createNewBatchController.exec(req, res))
stockRouter.delete('/batches', ensureAuthenticated, (req, res) => deleteBatchController.exec(req, res))

stockRouter.get('/products', ensureAuthenticated, (req, res) => getStockProductsController.exec(req, res))

export { stockRouter }