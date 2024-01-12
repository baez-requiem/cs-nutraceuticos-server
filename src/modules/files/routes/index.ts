import { uploadMulter } from '../../../server'

import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { pdfToImageController } from '../useCases/pdfToImage'

const filesRouter = Router()

filesRouter.post('/pdf-to-image', uploadMulter.single('pdf'), ensureAuthenticated, (req, res) => pdfToImageController.exec(req, res))

export { filesRouter }