import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getUserController } from '../useCases/getUser'
import { createUserController } from '../useCases/createUser'
import { deleteUserController } from '../useCases/deleteUser'
import { updateUserController } from '../useCases/updateUser'

const usersRouter = Router()

usersRouter.get('', ensureAuthenticated, (req, res) => getUserController.execute(req, res))
usersRouter.put('', ensureAuthenticated, (req, res) => updateUserController.execute(req, res))
usersRouter.post('', ensureAuthenticated, (req, res) => createUserController.execute(req, res))
usersRouter.delete('', ensureAuthenticated, (req, res) => deleteUserController.execute(req, res))

export { usersRouter }