import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getMediasController } from '../useCases/getMedias'
import { createMediaController } from '../useCases/createMedia'
import { deleteMediaController } from '../useCases/deleteMedia'
import { updateMediaController } from '../useCases/updateMedia'

const mediasRouter = Router()

mediasRouter.get('', ensureAuthenticated, (req, res) => getMediasController.execute(req, res))
mediasRouter.put('', ensureAuthenticated, (req, res) => updateMediaController.execute(req, res))
mediasRouter.post('', ensureAuthenticated, (req, res) => createMediaController.execute(req, res))
mediasRouter.delete('', ensureAuthenticated, (req, res) => deleteMediaController.execute(req, res))

export { mediasRouter }