import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getUserController } from '../useCases/getUser'
import { createUserController } from '../useCases/createUser'
import { deleteUserController } from '../useCases/deleteUser'
import { updateUserController } from '../useCases/updateUser'

import { getRolesController } from '../useCases/getRoles'

const usersRouter = Router()

usersRouter.get('', ensureAuthenticated, (req, res) => getUserController.exec(req, res))
usersRouter.put('', ensureAuthenticated, (req, res) => updateUserController.exec(req, res))
usersRouter.post('', ensureAuthenticated, (req, res) => createUserController.exec(req, res))
usersRouter.delete('', ensureAuthenticated, (req, res) => deleteUserController.exec(req, res))

usersRouter.get('/roles', (req, res) => getRolesController.exec(req, res))

export { usersRouter }