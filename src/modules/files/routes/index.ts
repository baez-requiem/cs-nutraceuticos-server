import multer from 'multer'

const storage = multer.memoryStorage()
const uploadMulter = multer({ storage: storage })

import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { pdfToImageController } from '../useCases/pdfToImage'

const filesRouter = Router()

filesRouter.post('/pdf-to-image', uploadMulter.single('pdf'), ensureAuthenticated, (req, res) => pdfToImageController.exec(req, res))

export { filesRouter }