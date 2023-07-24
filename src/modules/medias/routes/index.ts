import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getMediasController } from '../useCases/getMedias'
import { createMediaController } from '../useCases/createMedia'
import { deleteMediaController } from '../useCases/deleteMedia'
import { updateMediaController } from '../useCases/updateMedia'

const mediasRouter = Router()

mediasRouter.get('', ensureAuthenticated, (req, res) => getMediasController.exec(req, res))
mediasRouter.put('', ensureAuthenticated, (req, res) => updateMediaController.exec(req, res))
mediasRouter.post('', ensureAuthenticated, (req, res) => createMediaController.exec(req, res))
mediasRouter.delete('', ensureAuthenticated, (req, res) => deleteMediaController.exec(req, res))

export { mediasRouter }